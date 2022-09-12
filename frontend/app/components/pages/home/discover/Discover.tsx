import { FC } from "react";
import { IVideo } from "@/types/video.interface";
import styles from "./Discover.module.scss";
import LargeVideoItem from "@/components/ui/video-item/LargeVideoItem";

interface IDiscover {
	topVideo: IVideo;
	randomVideo: IVideo;
}

const Discover: FC<IDiscover> = ({ topVideo, randomVideo }) => {
	return (
		<div className={styles.discover}>
			<div className={styles.top_video}>
				<LargeVideoItem video={topVideo} />
			</div>
			<div className={styles.random_video}>
				<LargeVideoItem video={randomVideo} />
			</div>
		</div>
	);
};

export default Discover;
