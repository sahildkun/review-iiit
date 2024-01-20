import { Router } from "express";
const router = Router();

import {getCourse} from '../controllers/courseController.js';

router.route('/:course').get(getCourse);

export default router;