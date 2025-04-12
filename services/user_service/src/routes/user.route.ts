import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

//@ts-ignore
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);

// @ts-ignore
router.get('/by-email', UserController.getUserByEmail);
export default router;
