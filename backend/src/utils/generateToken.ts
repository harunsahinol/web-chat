import jwt from "jsonwebtoken";
import { Response } from "express";

export const generateToken = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15*42*60*60*1000,//15 days
    httpOnly: true, //prevent XSS attacks
    sameSite: "strict",//CSRF protection
    secure: process.env.NODE_ENV ! == "development", //only send cookie over HTTPS
  });

  return token;
};