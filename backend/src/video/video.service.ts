import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOptionsWhereProperty, ILike, MoreThan, Repository } from 'typeorm'
import { VideoEntity } from './video.entity'
import { VideoDto } from './video.dto'

@Injectable()
export class VideoService {
	constructor(
		@InjectRepository(VideoEntity)
		private readonly videoRepository: Repository<VideoEntity>,
	) {}

	async byId(id: number, isPublic = false) {
		const video = await this.videoRepository.findOne({
			where: isPublic ? { id, isPublic: true } : { id },
			relations: {
				user: true,
				comments: { user: true },
			},
			select: {
				user: {
					id: true,
					name: true,
					avatarPath: true,
					isVerified: true,
					subscribersCount: true,
				},
				comments: {
					message: true,
					id: true,
					user: {
						id: true,
						name: true,
						avatarPath: true,
						isVerified: true,
						subscribersCount: true,
					},
				},
			},
		})

		if (!video) throw new NotFoundException('Video was not found!')
		return video
	}

	async update(id: number, dto: VideoDto) {
		const video = await this.byId(id)

		return this.videoRepository.save({ ...video, ...dto })
	}

	async getAll(searchTerm?: string) {
		let options: FindOptionsWhereProperty<VideoEntity> = {}

		if (searchTerm)
			options = {
				name: ILike(`%${searchTerm}%`),
			}

		return this.videoRepository.find({
			where: { ...options, isPublic: true },
			order: { createdAt: 'DESC' },
			relations: {
				user: true,
				comments: { user: true },
			},
			select: {
				user: {
					id: true,
					name: true,
					avatarPath: true,
					isVerified: true,
				},
			},
		})
	}

	async getMostPopularByViews() {
		return this.videoRepository.find({
			where: {
				views: MoreThan(0),
			},
			relations: {
				user: true,
				comments: { user: true },
			},
			select: {
				user: {
					id: true,
					name: true,
					avatarPath: true,
					isVerified: true,
				},
			},
			order: { views: -1 },
		})
	}
}
