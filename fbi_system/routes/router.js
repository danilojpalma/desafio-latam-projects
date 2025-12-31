import express from "express";
import { home, login, restrictedLink } from "../controllers/controller.js";
const router = express.Router();




router.get("/", home);
router.post("/SignIn", login );
router.get("/restricted", restrictedLink );



export default router;