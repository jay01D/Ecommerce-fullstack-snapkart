import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173", // Frontend/Admin Local
  "http://localhost:5174", // Admin/Frontend Local
  // Add your Vercel deployment URLs here after deploying, e.g.:
  // 'https://your-frontend-project.vercel.app',
  // 'https://your-admin-project.vercel.app'
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        // For development, you might want to allow all, but for production:
        // return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
        // For now, let's allow all to prevent deployment issues until you have URLs:
        return callback(null, true);
      }
      return callback(null, true);
    },
  }),
);

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on PORT : " + port));
