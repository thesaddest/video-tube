import { axiosSimplified } from "../api/axios";
import { IVideo } from "@/types/video.interface";

export const VIDEO = "video";

export const VideoService = {
	async getAll() {
		return axiosSimplified.get<IVideo[]>(`/${VIDEO}`);
	},

	async getMostPopular() {
		return axiosSimplified.get<IVideo[]>(`/${VIDEO}/most-popular`);
	}
};
