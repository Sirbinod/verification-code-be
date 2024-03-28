import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

// Use the global error handling middleware
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
