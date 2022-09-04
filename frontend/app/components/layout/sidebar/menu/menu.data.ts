import { IMenuItem } from "@/components/layout/sidebar/menu/menu.interface";
import { HiChartBar, HiCollection, HiHome, HiStar } from "react-icons/hi";

export const menu: IMenuItem[] = [
	{
		title: "Main",
		icon: HiHome,
		link: "/"
	},
	{
		title: "Trends",
		icon: HiChartBar,
		link: "/trending"
	},
	{
		title: "My Channel",
		icon: HiStar,
		link: "/my-channel"
	},
	{
		title: "My Subscriptions",
		icon: HiCollection,
		link: "/subscriptions"
	}
];
