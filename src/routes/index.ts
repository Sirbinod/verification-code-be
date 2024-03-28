import express, { Request, Response } from "express";

import verifyCodeRoutes from "./verifyCodeRoutes";

const router = express.Router();

// code verify routes
router.use("/verify", verifyCodeRoutes);

// To catch unavailable route
router.use("/*", (req: Request, res: Response) => {
  res.status(404).json({ status: false, msg: "Route Not Found : Verify Code" });
});

export default router;
