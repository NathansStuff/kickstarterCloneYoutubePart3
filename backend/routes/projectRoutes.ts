import { Router } from 'express';
import { protect } from '../models/authMiddleware';

import {
    getProjectsHandler,
    createProjectHandler,
    getProjectHandler,
    deleteProjectHandler,
    updateProjectHandler,
} from '../controllers/projectController';

const router = Router();

router.route('/').get(getProjectsHandler).post(protect, createProjectHandler);
router
    .route('/:id')
    .get(getProjectHandler)
    .put(protect, updateProjectHandler)
    .delete(protect, deleteProjectHandler);

export default router;
