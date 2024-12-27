import { envConfig } from "@/src/config/enConfig";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});
export default axiosInstance;
