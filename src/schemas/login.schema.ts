import { z } from "zod";
const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter your valid email"),
  password: z.string().trim().min(6, "At least 6 characters"),
});
export default loginValidationSchema;
