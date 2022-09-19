import { FC } from "react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import Menu from "@/components/layout/sidebar/menu/Menu";
import { menu } from "@/components/layout/sidebar/menu/menu.data";
import { useAuth } from "@/hooks/useAuth";
import { api } from "@/store/api/api";

const Sidebar: FC = () => {
	const { user } = useAuth();

	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	});

	return (
		<aside className={styles.sidebar}>
			<Link href={"/"}>
				<a className={styles.logo}>VideoTube</a>
			</Link>
			<Menu title="Menu" items={menu} />

			{user && (
				<Menu
					title="My subscriptions"
					items={
						data?.subscriptions.map(({ toChannel }) => ({
							image: toChannel.avatarPath,
							title: toChannel.name,
							link: `/c/${toChannel.id}`
						})) || []
					}
				/>
			)}

			<div className={styles.copy}>© 2022 VIDEOTUBE by Artsem Shauchuk</div>
		</aside>
	);
};

export default Sidebar;
