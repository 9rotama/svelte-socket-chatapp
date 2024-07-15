import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("invalid email").min(1, "required"),
  password: z.string().min(1, "required"),
});
