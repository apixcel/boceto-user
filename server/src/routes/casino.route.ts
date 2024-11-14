import { Router } from "express";
import casinoController from "../controllers/casino.controller";
import authMiddleWere from "../middleware/authMiddleWere";
import { validSchema } from "../middleware/validator";
import casinoValidationSchema from "../validation/casino.validation";
const router = Router();
router.post(
  "/create",
  validSchema(casinoValidationSchema.create),
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("user"),
  casinoController.createCasino
);
router.get(
  "/get",
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("user"),
  casinoController.getCasinoByOwner
);

const casinoRoute = router;

export default casinoRoute;
