import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { VideoEntity } from '../video/video.entity'
import { Base } from '../utils/base'
import { UserEntity } from './user.entity'

@Entity('Subscriptions')
export class SubscriptionsEntity extends Base {
	@ManyToOne(() => UserEntity, user => user.subscriptions)
	@JoinColumn({ name: 'from_user_id' })
	fromUser: UserEntity

	@OneToMany(() => UserEntity, user => user.subscriptions)
	@JoinColumn({ name: 'to_channel_id' })
	toChannel: VideoEntity
}
