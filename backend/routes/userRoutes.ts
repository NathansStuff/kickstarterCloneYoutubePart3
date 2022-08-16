import express from 'express';
import { protect } from '../models/authMiddleware';
const router = express.Router();

const {
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    deleteUserHandler,
    updateUserHandler,
    loginUserHandler,
} = require('../controllers/userController');

router.route('/').get(protect, getUsersHandler).post(createUserHandler);
router.route('/login').post(loginUserHandler);
router
    .route('/:id')
    .get(getUserHandler)
    .put(protect, updateUserHandler)
    .delete(protect, deleteUserHandler);

module.exports = router;
