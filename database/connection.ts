import mongoose from "mongoose";

async function connect () {
    const dbUri:any = process.env.HEROKU_DB || process.env.DB  
    try {
        await mongoose.connect(dbUri);
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log("Could not connect to MongoDB" + error);
        process.exit(1)
    }
}

export default connect