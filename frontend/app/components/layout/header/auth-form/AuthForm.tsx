import { FC, useState } from "react";
import { useOutside } from "@/hooks/useOutside";
import { useAuth } from "@/hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFields } from "@/components/layout/header/auth-form/auth-form.interface";
import styles from "./AuthForm.module.scss";
import stylesIcon from "../icons-right/IconsRight.module.scss";
import { FaUserCircle } from "react-icons/fa";
import Field from "@/components/ui/field/Field";
import { validEmail } from "@/components/layout/header/auth-form/auth.valid";
import Button from "@/components/ui/button/Button";

const AuthForm: FC = () => {
	const { ref, setIsShown, isShown } = useOutside(false);
	const [type, setType] = useState<"login" | "register">("login");

	//useActions
	// const {isLoading} = useAuth();

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: "onChange"
	});
	const onSubmit: SubmitHandler<IAuthFields> = data => {
		// if (type === "login") elseIf(type === "register");
	};
	return (
		<div className={styles.wrapper} ref={ref}>
			<button
				className={stylesIcon.button}
				onClick={() => setIsShown(!isShown)}
			>
				<FaUserCircle fill="#A4A4A4" />
			</button>

			{isShown && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: validEmail,
								message: "Email is invalid"
							}
						})}
						placeholder="E-mail"
						error={errors.email}
					/>
					<Field
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 6,
								message: "Min. length is 6 symbols"
							}
						})}
						placeholder="Password"
						error={errors.password}
						type="password"
					/>
					<div className={"mt-5 mb-1 text-center"}>
						<Button onClick={() => setType("login")}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType("register")}
					>
						Register
					</button>
				</form>
			)}
		</div>
	);
};

export default AuthForm;
