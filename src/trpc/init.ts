import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { Context } from './server/context';

export const t = initTRPC.context<Context>().create({
    transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
