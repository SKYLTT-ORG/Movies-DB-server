import User from "../repositories/schemas/userSchema.js";

export const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    return null;
  }
  return user;
};

export const createUserById = async (name, password) => {
  //  implementation of bloom filter to check user already registered or not
  const user = new User({ name, password });
  await user.save();
  return user;
};

export const validateUserPassword = async (userId , password) =>{
    const user = await getUserById(userId)
    return user.comparePassword(password)
}

export const generateAuthToken = async(userId)=>{
    const user = await getUserById(userId)
    return user.generateAuthToken()
}