import express, { Request, Response } from "express";
import { login, logout } from '../controllers/authController';
import { getProfile } from "../controllers/userController";
import { authenticate } from "../middleware/authMiddleware";

const apiRouter = express.Router();

apiRouter.get('/', (req: Request, res: Response) => {
    res.send("Hello from api :)");
});

apiRouter.post("/login", login);
apiRouter.post("/logout", logout);

apiRouter.get("/profile", authenticate, getProfile);

export default apiRouter;