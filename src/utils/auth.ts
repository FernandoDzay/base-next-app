import { betterAuth } from 'better-auth';
import { createPool } from 'mysql2/promise';

export const auth = betterAuth({
    database: createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'base-nextjs',
    }),

    emailAndPassword: {
        enabled: true,
    },

});
