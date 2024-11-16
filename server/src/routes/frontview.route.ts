import { Router } from "express";
import frontViewController from "../controllers/fonntview.controller";
import authMiddleWere from "../middleware/authMiddleWere";
import { validSchema } from "../middleware/validator";
import frontViewValidationSchema from "../validation/frontView.validation";

const router = Router();
router.post(
  "/create",
  validSchema(frontViewValidationSchema.create),
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("user"),
  frontViewController.createFrontView
);

router.patch(
  "/update",
  validSchema(frontViewValidationSchema.update),
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("user"),
  frontViewController.updateFrontView
);
router.get("/get/:casinoId", frontViewController.retriveFrontviewByeCasinoId);
router.get(
  "/get-owner",
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("user"),
  frontViewController.retriveFrontviewByOwner
);
const frontViewRoute = router;

export default frontViewRoute;
