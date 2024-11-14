import { Router } from "express";
import { multerUpload } from "../config/multerConfig";
import uploadController from "../controllers/upload.controller";
import authMiddleWere from "../middleware/authMiddleWere";
const router = Router();
router.post(
  "/upload/multi",
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("admin", "user"),
  multerUpload.array("images"),
  uploadController.uploadMutilpleImages
);
router.post(
  "/upload/single",
  authMiddleWere.isAuthenticateUser,
  authMiddleWere.authorizeRoles("admin", "user"),
  multerUpload.single("image"),
  uploadController.uploadSingleImage
);
const imageRoute = router;
export default imageRoute;
