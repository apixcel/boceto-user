import { Router } from "express";
import withdrawElementController from "../controllers/withdrawElement.controller";
import authMiddleWere from "../middleware/authMiddleWere";
import { validSchema } from "../middleware/validator";
import WithdrawEelementValidationSchema from "../validation/withdraw.validation";

const router = Router();
router.get(
  "/get/:casinoId",
  withdrawElementController.getWithdrawElementByCasinoId
);

router.get(
  "/get-owner",
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("user"),
  withdrawElementController.getWithdrawElementByOwener
);
router.post(
  "/create",
  validSchema(WithdrawEelementValidationSchema.create),
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("user"),
  withdrawElementController.createWithdrawElement
);
const withdrawElementRoute = router;
export default withdrawElementRoute;
