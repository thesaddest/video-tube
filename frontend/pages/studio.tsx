import { NextPageAuth } from "@/providers/private-route.inteface";

const StudioPage: NextPageAuth = () => {
	return <div>Studio</div>;
};

StudioPage.isOnlyUser = true;

export default StudioPage;
