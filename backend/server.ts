import express from 'express';
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorMiddleware';
import { PORT } from './utils/config';
import * as Colors from 'colors.ts';
import UserRouter from './routes/userRoutes';
import ProjectRouter from './routes/projectRoutes';
Colors.colors('', '');

export const db = async (): Promise<void> => {
    await connectDB();
};

const app = express();
app.use(express.json());

app.use('/api/projects', ProjectRouter);
app.use('/api/users', UserRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
