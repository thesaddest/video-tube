import React, { FC } from "react";
import styles from "./Comments.module.scss";
import { IComment } from "@/types/comment.interface";
import { useAuth } from "@/hooks/useAuth";
import CommentItem from "@/components/pages/video/comments/CommentItem";
import AddCommentForm from "@/components/pages/video/comments/AddCommentForm";

const Comments: FC<{ comments: IComment[]; videoId: number }> = ({
	comments,
	videoId
}) => {
	const { user } = useAuth();
	return (
		<div className={styles.comments}>
			<h2>Comments</h2>
			<div className={styles.line} />
			{comments.length ? (
				<div className={styles.grid}>
					{comments.map(comment => (
						<CommentItem comment={comment} key={comment.id} />
					))}
				</div>
			) : (
				<p>No comments found!</p>
			)}

			<div className={styles.bottomForm}>
				{user && <AddCommentForm videoId={videoId} />}
			</div>
		</div>
	);
};

export default Comments;
