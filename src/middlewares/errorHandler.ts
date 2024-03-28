import { Request, Response, NextFunction } from "express";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);

  if (err.name === "ValidationError") {
    const errors = err?.error?.map((error: { message: string }) => error.message);
    return res.status(400).json({ status: false, message: "Invalid Input!", errors });
  }

  return res.status(500).json({ status: false, message: "Internal Server Error" });
};

export default errorHandler;
