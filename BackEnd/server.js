import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router as graduate } from './routes/graduate.js'
import { router as profile } from './routes/profile.js'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const port = process.env.PORT;
const host = process.env.HOST;
const db = process.env.DB_URI;

const app = express();


const main = async () => {
    console.log(`Connecting to DB @ ${db}`);
    await mongoose.connect(db);
}
main().catch(err => console.log(err))

//##### TEST by requesting http://127.0.0.1:4000/graduate/1 
app.use('/graduate', graduate)
app.use('/profile', profile)




const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is runnning on http://${SERVERHOST}:${SERVERPORT}`);
})