import express, { Request, Response } from "express";
import { login } from '../controllers/authController'

const apiRouter = express.Router()

apiRouter.get('/', (req: Request, res: Response) => {
    res.send("Hello from api :)")
})

apiRouter.post("/login", login);

export default apiRouter;