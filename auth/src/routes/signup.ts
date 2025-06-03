import express, { RequestHandler } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

const handleSignup: RequestHandler = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send(errors.array());
    return;
  }

  const { email, password } = req.body;

  console.log("Creating a user...");

  res.send({});
};

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  handleSignup
);

export { router as signupRouter };
