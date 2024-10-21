import express from "express";
import cors from "cors";
import userRouter from "./router/userRouter";
import zapRouter from "./router/zapRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/zap", zapRouter);

app.listen(3000);
