import { TRPCError } from "@trpc/server";
import { t } from "../init";
import { Context } from "./context";


export const baseProcedure = t.procedure;

export const authProcedure = baseProcedure.use<Context>(function isAuthed(opts) {
    if (false) {
        throw new TRPCError({
            code: 'UNAUTHORIZED',
        });
    }
    
    return opts.next({
        ctx: {
            loggedUser: {id: 0, name: 'asdasd'}
        },
    });
});