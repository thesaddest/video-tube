import { axiosSimplified } from "../api/axios";
import { IUser } from "@/types/user.interface";

export const USER = "user";

export const UserService = {
	async getAll() {
		return axiosSimplified.get<IUser[]>(`/${USER}`);
	},

	async getUser(id: number) {
		return axiosSimplified.get<IUser>(`/${USER}/by-id/${id}`);
	}
};
