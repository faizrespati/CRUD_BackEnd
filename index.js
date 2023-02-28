import Express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));