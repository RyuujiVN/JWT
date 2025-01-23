import express from "express";
const router = express.Router();

import adminController from "../controller/auth.controller.js";

router.post('/login', adminController.login);

router.post('/register', adminController.register);

export default router;