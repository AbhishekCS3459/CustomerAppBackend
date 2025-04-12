import { Request, Response } from 'express';
import { z } from 'zod';
import UserService from '../services/user.service';
import {  UserValidator } from '../validators/userValidators';

const EmailQuerySchema = z.object({
  email: z.string().email(),
});
const createUser = async (req: Request, res: Response) => {
  try {
    const validated = UserValidator.parse(req.body);
    // Check if user already exists
    const existingUser = await UserService.getAllUsers();
    if (existingUser.some((user) => user.email === validated.email)) {
      return res.status(409).json({
        error: 'User already exists',
      });
    }
    // Create user
    const user = await UserService.createUser(validated);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({
      error: err?.errors || err.message || "Validation failed",
    });
  }
};

const getAllUsers = async (_: Request, res: Response) => {
  
  const users = await UserService.getAllUsers();
  res.json(users);
};
const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = EmailQuerySchema.parse(req.query);
    const user = await UserService.getUserByEmail(email);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (err: any) {
    return res.status(400).json({
      error: err?.errors || err.message || 'Invalid request',
    });
  }
};


export default { createUser, getAllUsers, getUserByEmail };
