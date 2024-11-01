import {
  getUserById,
  createUserById,
  validateUserPassword,
  generateAuthToken,
} from "../services/userService.js";

export const registration = async (req, res) => {
  const { name,userId, password } = req?.body;
  const checkExistingUser = await getUserById(userId);
  if (checkExistingUser) {
    res.status(409).json({ message: "user already exist" });
    return;
  }
  const newUser = await createUserById(name, userId, password);
  if (!newUser) {
    res.status(500).json({ mess: "could not create User" });
  }
  res.status(201).json(newUser);
};

export const login = async (req, res) => {
  const { userId, password } = req?.body;
  const checkExistingUser = await getUserById(userId);
  const isMatch = await validateUserPassword(userId, password);
  if (!checkExistingUser || !isMatch) {
    res.status(403).json({ message: "userName and password did not match" });
    return;
  }
  const token = await generateAuthToken(userId);
  if (!token) {
    res.status(500).json({ message: "could not login in user" });
    return;
  }

  res.status(200).json({token});
};
