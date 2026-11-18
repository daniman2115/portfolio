import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import connectDB from "./config/db.js";
import ContactRoutes from "./routes/contact-routes.js";



dotenv.config();

export const app = express();
app.set("trust proxy", 1);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      process.env.VITE_REACT_URL || "http://localhost:5173",
      "http://localhost:5174",
    ].filter(Boolean),
    credentials: true,
    methods: ["GET", "POST", "PUT", ".PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);


const server = http.createServer(app);

const startServer = async () => {
  try {
    console.log("🔄 Connecting to database...");
    if (process.env.NODE_ENV !== "test") {
      await connectDB();
    }
    console.log("🔌 Initializing Socket.IO...");





    app.use("/api/contact", ContactRoutes);

    const PORT = process.env.PORT || 5000;

    server.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port: ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
