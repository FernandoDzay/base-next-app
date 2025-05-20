import { TRPCError } from "@trpc/server";
import { t } from "../init";


export const permissionPipe = (permission: number) => t.middleware(opts => {
    if(permission !== 3) {
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'asdad'
        });
    }

    return opts.next();
})