import { Router } from "express";
import { VerifyCodeController } from "../controllers/verifyCodeController";
import { validatorHandler } from "../middlewares/validatorHandler";
import { verifyCodeSchema } from "../schemas/verifyCodeSchema";

const router = Router();
const controller = new VerifyCodeController();

router.post("/", validatorHandler(verifyCodeSchema, "body"), controller.postCode);

export default router;
