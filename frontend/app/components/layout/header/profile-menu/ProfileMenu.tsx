import { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import { api } from "@/store/api/api";
import { useOutside } from "@/hooks/useOutside";
import { useActions } from "@/hooks/useActions";
import styles from "./ProfileMenu.module.scss";
import Image from "next/image";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Link from "next/link";

const ProfileMenu: FC = () => {
	const { user } = useAuth();

	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	});

	const { isShown, setIsShown, ref } = useOutside(false);
	const { logout } = useActions();

	if (isLoading) return null;

	return (
		<div ref={ref} className={styles.wrapper}>
			<button onClick={() => setIsShown(!isShown)}>
				<Image
					src={data?.avatarPath || ""}
					alt={data?.name}
					width={40}
					height={40}
					priority
				/>
				<span className={styles.name}>{data?.name}</span>
				{isShown ? <GoChevronUp /> : <GoChevronDown />}
			</button>

			{isShown && (
				<div className={styles["profile-menu"]}>
					<ul>
						<li>
							<Link href={`/c/${user?.id}`}>
								<a>My Channel</a>
							</Link>
						</li>
						<li>
							<Link href={"/studio"}>
								<a>Studio</a>
							</Link>
						</li>
						<li>
							<button onClick={logout}>Logout</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default ProfileMenu;
