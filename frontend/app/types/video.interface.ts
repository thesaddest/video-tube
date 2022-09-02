import { IBase } from "@/types/base.interface";
import { IUser } from "@/types/user.interface";
import { IComment } from "@/types/comment.interface";

export interface IVideo extends IBase {
	name: string;
	isPublic: boolean;
	views?: number;
	likes?: number;
	duration?: number;
	description: string;
	videoPath: string;
	thumbnailPath: string;
	user?: IUser;
	comments?: IComment[];
}

export type IVideoDto = Pick<
	IVideo,
	"id" | "thumbnailPath" | "description" | "name" | "videoPath" | "isPublic"
>;
