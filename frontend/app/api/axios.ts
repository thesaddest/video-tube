import axios from "axios";
import { getContentType } from "@/utils/api.utils";

export const API_URL = `http://localhost:4200/api`;

export const axiosSimplified = axios.create({
	baseURL: API_URL,
	headers: getContentType()
});
