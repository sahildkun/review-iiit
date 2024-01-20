import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { validateLogin, validateRegistration } from "../middleware/validationMiddleware.js";
const router = Router();

router.post('/login', validateLogin, login);
router.post('/register', validateRegistration, register);

export default router;

