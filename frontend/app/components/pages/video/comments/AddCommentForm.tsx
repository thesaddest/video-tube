import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICommentDto } from "@/types/comment.interface";
import { commentApi } from "@/store/api/comment.api";
import styles from "./Comments.module.scss";
import Field from "@/components/ui/field/Field";
import { MdSend } from "react-icons/md";

const AddCommentForm: FC<{ videoId: number }> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ICommentDto>({ mode: "onChange" });

	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation();

	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset());
	};
	return (
		<form className={styles.form} onChange={handleSubmit(onSubmit)}>
			<div className="relative">
				<Field
					{...register("message", { required: "The message is required" })}
					placeholder="Enter the comment message"
					error={errors.message}
				/>

				<button
					className="text-xl absolute right-2 top-1.5 text-purple"
					disabled={isLoading}
				>
					<MdSend />
				</button>
			</div>
		</form>
	);
};

export default AddCommentForm;
