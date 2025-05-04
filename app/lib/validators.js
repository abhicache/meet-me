import { z } from 'zod';

export const usernameSchema = z.object({
  username: z.string()
  .min(3)
  .max(20)
  .regex(/^[a-zA-Z0-9_]+$/, 
    "Username can only contain letters, numbers and underscores"
  ),
});

export const eventSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(500, { message: "Description must be at most 500 characters long" }),
    duration: z.number().int().positive({ message: "Duration must be a positive integer" }),
    
    isPrivate: z.boolean(),
});