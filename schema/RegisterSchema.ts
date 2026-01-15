import { z } from "zod";

export const password = () =>
  z
    .string()
    .refine((password) => password.length >= 6, {
      message: "The password must be at least 6 characters long",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "The password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "The password must contain at least one lowercase letter",
    })
    .refine((password) => /\d/.test(password), {
      message: "The password must contain at least one number",
    });

export const registerSchema = () =>
  z.object({
    email: z.email({ message: "The email is not valid" }),
    password: password(),
  });

// ✅ Tipo corretto
export type RegisterSchema = z.infer<ReturnType<typeof registerSchema>>;
