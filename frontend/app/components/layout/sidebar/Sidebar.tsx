import { FC } from "react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import Menu from "@/components/layout/sidebar/menu/Menu";
import { menu } from "@/components/layout/sidebar/menu/menu.data";

const Sidebar: FC = () => {
	//TODO: get profile

	return (
		<aside className={styles.sidebar}>
			<Link href={"/"}>
				<a className={styles.logo}>VideoTube</a>
			</Link>
			<Menu title="Menu" items={menu} />

			<div className={styles.copy}>© 2022 VIDEOTUBE by Artsem Shauchuk</div>
		</aside>
	);
};

export default Sidebar;
