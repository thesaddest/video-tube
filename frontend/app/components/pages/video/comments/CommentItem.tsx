import React, { FC } from "react";
import styles from "./Comments.module.scss";
import { IComment } from "@/types/comment.interface";
import ChannelInfoSmall from "@/components/ui/channel-info-small/ChannelInfoSmall";

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
	return (
		<div className={styles.commentItem}>
			<ChannelInfoSmall channel={comment.user} message={comment.message} />
		</div>
	);
};

export default CommentItem;
