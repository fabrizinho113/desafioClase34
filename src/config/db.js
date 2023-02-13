import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from '../loggers/Log4jsLogger.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
    err
        ? logger.error("error, can't connect to MongoDB")
        : logger.info("connected to mongoDB Atlas")
})

export default mongoose;
