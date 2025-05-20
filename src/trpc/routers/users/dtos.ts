import { z } from '@/utils/zod-translation';

export const CreateUserSchema = z.object({
    name: z.string().min(3),
    email: z.string().email().min(5),
    password: z.string().min(3),
});

export const UpdateUserSchema = CreateUserSchema.partial();

export const FindAllUsersSchema = z
    .object({
        name: z.string().optional(),
        email: z.string().optional(),
        created_at: z.string().optional(),
    })
    .partial();

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
export type FindAllUsersDto = z.infer<typeof FindAllUsersSchema>;
