// import cookieParser from 'cookie-parser'
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { config } from "./config";
import globalErrorHanlder from "./middleware/globalErrorHanlder";
import { notFound } from "./middleware/not-found";
import router from "./routes";
import sendResponse from "./utils/sendResponse";
const app: Application = express();

// middlewares
app.use(cookieParser());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
    origin: [config.BASE_SITE!, "http://localhost:3000","http://localhost:5001", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (_: Request, res: Response) => {
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "welcome",
    data: null,
  });
});

// 404 handler
app.all("*", notFound);

// global error handler
app.use(globalErrorHanlder);

export default app;
