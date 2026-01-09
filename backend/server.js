import 'dotenv/config';
import e from "express";
import cors from 'cors';
import connectDB from './config/db.js';
import router from './routes/auth.js';

const app = e();
app.use(cors());

connectDB();

app.use(e.json());

app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`${port}`)
})
