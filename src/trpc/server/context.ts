import 'server-only';

import { cache } from 'react';
import { getDbConnection } from '@/database/datasource';

export const createContext = cache(async () => {
    const db = await getDbConnection();
    const loggedUser = null as {id: number, name: string}|null; 

    return {
        db,
        loggedUser: loggedUser
    };
});

export type Context = Awaited<ReturnType<typeof createContext>>;
