import express from 'express';
const router = express.Router();

const {
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    deleteUserHandler,
    updateUserHandler,
} = require('../controllers/userController');

router.route('/').get(getUsersHandler).post(createUserHandler);
router
    .route('/:id')
    .get(getUserHandler)
    .put(updateUserHandler)
    .delete(deleteUserHandler);

module.exports = router;
