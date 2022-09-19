import React, { FC } from "react";
import { IVideo } from "@/types/video.interface";
import Layout from "@/components/layout/Layout";
import Catalog from "@/components/pages/home/catalog/Catalog";

const Trending: FC<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return (
		<Layout title="Trends">
			<Catalog newVideos={topVideos} />
		</Layout>
	);
};

export default Trending;
