import { FC } from "react";
import styles from "./Catalog.module.scss";
import { IVideo } from "@/types/video.interface";
import Heading from "@/components/ui/heading/Heading";
import VideoItem from "@/components/ui/video-item/VideoItem";

const Catalog: FC<{
	newVideos: IVideo[];
	removeHandler?: (videoId: number) => void;
	isUpdateLink?: boolean;
}> = ({ newVideos, removeHandler, isUpdateLink }) => {
	return (
		<div className={styles.recommended}>
			<div className={styles.top_block}>
				<Heading title={removeHandler ? "My Videos" : "Recommendations"} />
			</div>
			<div className={styles.catalog}>
				{newVideos.map(video => (
					<VideoItem
						item={video}
						key={video.id}
						removeHandler={removeHandler}
						isUpdateLink={isUpdateLink}
					/>
				))}
			</div>
		</div>
	);
};

export default Catalog;
