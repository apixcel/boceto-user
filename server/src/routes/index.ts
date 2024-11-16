import { Router } from "express";
import bankAccountRoute from "./bankAccount.route";
import billingRoute from "./billing.route";
import casinoRoute from "./casino.route";
import frontViewRoute from "./frontview.route";
import uploadRoute from "./upload.route";
import authRoute from "./user.route";
import withdrawElementRoute from "./withdrawEelement.route";
const router = Router();
const moduleRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/bank-account",
    route: bankAccountRoute,
  },
  {
    path: "/frontview",
    route: frontViewRoute,
  },
  {
    path: "/billing",
    route: billingRoute,
  },

  {
    path: "/withdraw-element",
    route: withdrawElementRoute,
  },
  {
    path: "/casino",
    route: casinoRoute,
  },
  {
    path: "/upload",
    route: uploadRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
