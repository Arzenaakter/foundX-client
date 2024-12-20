import { envConfig } from "@/src/config/enConfig";
import delay from "@/src/utils/delay";
const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`
  );
  // await delay(5000);
  return res.json();
};

export default getRecentPosts;
