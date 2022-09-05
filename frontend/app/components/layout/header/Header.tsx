import { FC } from "react";
import styles from "./Header.module.scss";
import Search from "@/components/layout/header/search/Search";
import IconsRight from "@/components/layout/header/icons-right/IconsRight";
const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Search />
			<IconsRight />
		</header>
	);
};

export default Header;
