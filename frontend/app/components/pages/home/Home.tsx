import { FC } from "react";
import Layout from "@/components/layout/Layout";
import Discover from "@/components/pages/discover/Discover";
import Catalog from "@/components/pages/catalog/Catalog";

const Home: FC = () => {
	return (
		<Layout title="Video Tube | Video Hosting">
			<Discover />
			<Catalog />
		</Layout>
	);
};

export default Home;
