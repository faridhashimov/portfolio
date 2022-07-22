import { Router } from 'express'
import {
    addProject,
    getAllProjects,
    getSingleProject,
    deleteProject,
    updatedProject,
} from '../controllers/projectController.js'

const router = Router()

router.route('/').post(addProject).get(getAllProjects)
router
    .route('/:id')
    .get(getSingleProject)
    .delete(deleteProject)
    .put(updatedProject)

export default router
