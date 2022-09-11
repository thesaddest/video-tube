import { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import { api } from "@/store/api/api";

const ProfileMenu: FC = () => {
	const { user } = useAuth();

	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	});

	if (isLoading) return null;

	return <div>{data?.name}</div>;
};

export default ProfileMenu;
