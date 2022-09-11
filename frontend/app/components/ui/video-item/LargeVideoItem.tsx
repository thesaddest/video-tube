import { FC } from "react";
import { IVideo } from "@/types/video.interface";
import cn from "classnames";
import styles from "./VideoItem.module.scss";
import Image from "next/image";
import VideoDuration from "@/components/ui/video-item/VideoDuration";
import Link from "next/link";
import UserAvatar from "@/components/ui/user-avatar/UserAvatar";
import VideoStatistics from "@/components/ui/video-item/VideoStatistics";

export const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className={cn(styles.video_item, styles.large_item)}>
			<div className={styles.thumbnail}>
				{video.thumbnailPath && (
					<Image
						src={video.thumbnailPath}
						alt={video.name}
						layout="fill"
						className={styles["bg-image"]}
						priority
					/>
				)}
				<VideoDuration isBottom duration={video.duration!} />

				<div className={styles.information}>
					<Link href={`/v/${video.id}`}>
						<a className={styles.name}>{video.name}</a>
					</Link>

					{video?.user?.avatarPath && <UserAvatar user={video.user} isWhite />}
					<div className={styles.author}>{video.user?.name}</div>
					<VideoStatistics views={video.views!} createdAt={video.createdAt} />
				</div>
			</div>
		</div>
	);
};

export default LargeVideoItem;
