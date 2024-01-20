import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import { UnauthenticatedError } from '../errors/customErrors.js';

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({email: email});
  if(!user){
    throw new UnauthenticatedError('please register..');
  }

  res.send('login');
};