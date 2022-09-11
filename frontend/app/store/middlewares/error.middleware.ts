import { Middleware, MiddlewareAPI } from "redux";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toastrErr } from "@/utils/api.utils";

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			toastrErr(action.error, "RTK error");
		}
		return next(action);
	};
