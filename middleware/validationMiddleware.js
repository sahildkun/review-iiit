import { body, param,  validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customErrors.js";
import User from "../models/userModel.js";

const validationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            const errorMessages = errors.array().map((error) => error.msg);
    
            const firstMessage = errorMessages[0];
            console.log(Object.getPrototypeOf(firstMessage));
            if (errorMessages[0].startsWith('no job')) {
              throw new NotFoundError(errorMessages);
            }
            if (errorMessages[0].startsWith('not authorized')) {
              throw new UnauthorizedError('not authorized to access this route');
            }
            throw new BadRequestError(errorMessages);
          }
          next();
        },
      ];
}

export const validateTest = validationErrors([
    body('name')
        .notEmpty()
        .withMessage('name required')
        .isLength({min:3, max:40})
        .withMessage('min 3 max 40 length')
        .trim(),
])

export const validateRegistration = validationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format').custom( async (email) => {

        const user = await User.findOne({email});
        if (user){
            throw new BadRequestError('email already exists error');
        }
    }),
    body('password').notEmpty().withMessage('password is required').isLength({min: 8}).withMessage('min 8 characters long'),
]);

export const validateLogin = validationErrors([
  body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required').isLength({min: 8}).withMessage('min 8 characters long'),
]);



