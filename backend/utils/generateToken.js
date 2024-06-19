import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400000, // 1 day
  };

  res.cookie("auth_token", token, cookieOptions);

  // console.log("Token:", token);
  // console.log("Cookie options:", cookieOptions);
};

export default generateToken;
