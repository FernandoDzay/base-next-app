import { createTRPCRouter } from '@/trpc/init';
import { permissionPipe } from '@/trpc/pipes/permissionPipe';
import { authProcedure } from '@/trpc/server/procedures';
import { z } from 'zod';

export const usersRouter = createTRPCRouter({

    getUsers: authProcedure
    .use(permissionPipe(3))
    .input(z.number())
    .query(async ({ input, ctx }) => {
        console.log(ctx.db);
        return {input, loggedUser: ctx.loggedUser};
    }),

});
