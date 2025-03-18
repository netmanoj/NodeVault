import express from "express";
import * as dotenv from "dotenv";
import authRoutes from "./auth";
import storageRoutes from "./routes";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/storage", storageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
