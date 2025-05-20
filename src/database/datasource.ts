import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/better-auth/user.entity';
import { Account } from './entities/better-auth/account.entity';
import { Verification } from './entities/better-auth/verification.entity';
import { Session } from './entities/better-auth/session.entity';

const appDatasource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'base-nextjs',
    entities: [
        /* better-auth */
        User,
        Account,
        Verification,
        Session,
        /* ----------- */

        
    ],
    logging: false,
    synchronize: false,
});

export const getDbConnection = async () => {
    if (!appDatasource.isInitialized) {
        await appDatasource.initialize();
    }

    return appDatasource;
};
