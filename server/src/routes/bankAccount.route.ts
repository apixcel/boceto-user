import { Router } from "express";
import authMiddleWere from "../middleware/authMiddleWere";
import { validSchema } from "../middleware/validator";
import bankAccountValidationSchema from "../validation/bankAccount.validation";
import bankAccountController from "../controllers/BankAccount.controller";
const router = Router();

router.get(
  "/get",
  authMiddleWere.isAuthenticateUser,
  // authMiddleWere.authorizeRoles("user"),
  bankAccountController.retriveUserBankAccounts
);
router.post(
  "/create",
  authMiddleWere.isAuthenticateUser,
  // authMiddleWere.authorizeRoles("user"),
  // validSchema(bankAccountValidationSchema.create),
  bankAccountController.createUserBankAccount
);
router.patch(
  "/update/:bankAccountId",
  authMiddleWere.isAuthenticateUser,
  // authMiddleWere.authorizeRoles("user"),
  // validSchema(bankAccountValidationSchema.update),
  bankAccountController.updateUserBankAccount
);
router.delete(
  "/delete/:bankAccountId",
  authMiddleWere.isAuthenticateUser,
  // authMiddleWere.authorizeRoles("user"),
  bankAccountController.deleteUserBankAccount
);

const bankAccountRoute = router;

export default bankAccountRoute;
