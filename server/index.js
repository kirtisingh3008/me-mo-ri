import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/users.js";
import dotenv from 'dotenv';
const app =express();
dotenv.config();



app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());
app.use('/posts', postRoutes);
app.use("/user", userRouter);
//using mongodb as database where they will host our website


const PORT =process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT , () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set(`useFindAndModify`,false);

