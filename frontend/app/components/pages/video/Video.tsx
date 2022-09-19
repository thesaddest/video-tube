import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./Video.module.scss";
import VideoPlayer from "@/components/pages/video/video-player/VideoPlayer";
import cn from "classnames";
import { useRouter } from "next/router";
import { IVideo } from "@/types/video.interface";
import { videoApi } from "@/store/api/video.api";
import Comments from "@/components/pages/video/comments/Comments";

const Video: FC = () => {
	const { query } = useRouter();

	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(query.id),
		{
			skip: !query?.id
		}
	);
	return (
		<Layout title={video.name}>
			<div className={styles.layout}>
				<VideoPlayer videoPath={video.videoPath} />
				<Comments videoId={video.id} comments={video.comments || []} />
			</div>
			<div className={cn(styles.layout, "mt-7")}></div>
		</Layout>
	);
};

export default Video;
