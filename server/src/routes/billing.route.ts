import { Router } from "express";
import billingController from "../controllers/billing.controller";
import authMiddleWere from "../middleware/authMiddleWere";
import { validSchema } from "../middleware/validator";
import billingValidationSchema from "../validation/billing.validation";

const router = Router();
router.get(
  "/get",
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("user"),
  billingController.getBillingByCasinoOwner
);

router.post(
  "/create/:casinoId",
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("player"),
  validSchema(billingValidationSchema.create),
  billingController.createBilling
);

const billingRoute = router;

export default billingRoute;
