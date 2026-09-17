import express from "express";
import { getProfile } from "../controllers/userController.js";
import verifyToken from "../Middleware/verifyToken.js";

const router = express.Router();

router.get("/profile", verifyToken, getProfile);

export default router;