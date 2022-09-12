import { FC } from "react";
import Layout from "@/components/layout/Layout";
import Discover from "@/components/pages/home/discover/Discover";
import Catalog from "@/components/pages/home/catalog/Catalog";
import { IHome } from "@/components/pages/home/home.interface";

const Home: FC<IHome> = ({ randomVideo, newVideos, topVideo }) => {
	console.log(randomVideo, newVideos, topVideo);
	return (
		<Layout title="Video Tube | Video Hosting">
			<Discover topVideo={topVideo} randomVideo={randomVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	);
};

export default Home;
