import "express-async-errors";
import express, { Application } from "express";

import { usersRoutes } from "./routers/users.routes";
import { handleErrors } from "./errors";
import { loginRoutes } from "./routers/login.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use(handleErrors);

export default app;
