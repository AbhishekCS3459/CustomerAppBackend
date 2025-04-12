import { z } from "zod";

export const UserValidator = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  dob: z.coerce.date(), 
});

export type User = z.infer<typeof UserValidator>;
