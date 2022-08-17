import { Router } from 'express';
import { protect } from '../models/authMiddleware';
import {
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    deleteUserHandler,
    updateUserHandler,
    loginUserHandler,
} from '../controllers/userController';

const router = Router();

router.route('/').get(protect, getUsersHandler).post(createUserHandler);
router.route('/login').post(loginUserHandler);
router
    .route('/:id')
    .get(getUserHandler)
    .put(protect, updateUserHandler)
    .delete(protect, deleteUserHandler);

export default router;
