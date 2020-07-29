import { Application } from 'express';
import { AuthRoute } from '../routes';

export class ApplicationRoutes {
    public static register(app: Application) {
        const authRoute = new AuthRoute().init();

        app.use('/api/auth', authRoute);

    }
}
