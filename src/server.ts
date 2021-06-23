import "reflect-metadata";
import express, { NextFunction, Request, response, Response } from "express";
import "express-async-errors";
import "./database";
import { routes } from "./routes";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({ messagem: err.message, error: err });
    }

    return res.status(500).json({
        message: "Internal Server Error!",
        status: "Error!"
    });
});

app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}!`));
