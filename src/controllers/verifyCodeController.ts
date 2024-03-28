import { NextFunction, Request, Response } from "express";
import { CommonResponse } from "../utils/commonResponse";

export class VerifyCodeController {
  public async postCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { code } = req.body;
      if (!code || code.length !== 6 || code.charAt(5) === "7" || !/^\d+$/.test(code)) {
        const response: CommonResponse = {
          status: false,
          message: "Invalid code!",
        };
        res.status(400).json(response);
      } else {
        const response: CommonResponse = {
          status: true,
          message: "Verification code verified successfully",
        };
        res.status(200).json(response);
      }
    } catch (error) {
      next(error);
    }
  }
}
