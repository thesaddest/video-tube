import { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import styles from "./IconsRight.module.scss";
import ProfileMenu from "@/components/layout/header/profile-menu/ProfileMenu";
import UploadVideo from "@/components/layout/header/upload-video/UploadVideo";
import AuthForm from "@/components/layout/header/auth-form/AuthForm";

const IconsRight: FC = () => {
	const { user } = useAuth();
	return (
		<div className={styles.icons}>
			{user ? (
				<>
					<ProfileMenu />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	);
};

export default IconsRight;
