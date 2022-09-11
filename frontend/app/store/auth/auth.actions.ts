import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthData } from "@/services/auth/auth.helper";
import { IAuthFields } from "@/components/layout/header/auth-form/auth-form.interface";
import { toastrErr } from "@/utils/api.utils";
import { AuthService } from "@/services/auth/auth.service";
import { toastr } from "react-redux-toastr";

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	"auth/register",
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password);
			toastr.success("Registration", "Succeed");
			return response;
		} catch (e) {
			toastrErr(e);
			return thunkAPI.rejectWithValue(e);
		}
	}
);

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	"auth/login",
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password);
			toastr.success("Login", "Succeed");
			return response;
		} catch (e) {
			toastrErr(e);
			return thunkAPI.rejectWithValue(e);
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async => {
	return {};
});
