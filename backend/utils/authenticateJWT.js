import jwt from "jsonwebtoken";

const authenticateJWT = (req, res, next) => {
  const token = req.cookies["auth_token"];
  console.log("TOKEN", token);
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Assign decoded.userId to req.userId
    console.log(decoded);
    next();
  } catch (error) {
    return res.status(401).json({ message: "not authorized" });
  }
};

export default authenticateJWT;
