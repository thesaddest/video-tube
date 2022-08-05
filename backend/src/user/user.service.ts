import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'
import { SubscriptionsEntity } from './subscriptions.entity'
import { UserDto } from './user.dto'
import { genSalt, hash } from 'bcryptjs'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
		@InjectRepository(SubscriptionsEntity)
		private readonly subscriptionsRepository: Repository<SubscriptionsEntity>,
	) {}

	async byId(id: number) {
		const user = await this.userRepository.findOne({
			where: { id },
			relations: {
				videos: true,
				subscriptions: true,
			},
			order: {
				createdAt: 'DESC',
			},
		})

		if (!user) throw new NotFoundException('User was not found!')
		return user
	}

	async updateProfile(id: number, dto: UserDto) {
		const user = await this.byId(id)
		const isSameUser = await this.userRepository.findOneBy({ email: dto.email })
		if (isSameUser && id !== isSameUser.id)
			throw new BadRequestException('Email is already registered')
		if (dto.password) {
			const salt = await genSalt(10)
			user.password = await hash(dto.password, salt)
		}
		user.email = dto.email
		user.name = dto.name
		user.description = dto.description
		user.avatarPath = dto.avatarPath

		return this.userRepository.save(user)
	}
	async subscribe(id: number, channelId: number) {
		const data = {
			toChannel: { id: channelId },
			fromUser: { id },
		}
		const isSubscribed = await this.subscriptionsRepository.findOneBy(data)

		if (!isSubscribed) {
			const newSubscription = await this.subscriptionsRepository.create(data)
			await this.subscriptionsRepository.save(newSubscription)
			return true
		}
		await this.subscriptionsRepository.delete(data)
		return false
	}

	async getAll() {
		return this.userRepository.find()
	}
}
