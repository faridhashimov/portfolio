import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConfig } from './config/db.js'
import projectRoute from './routes/projectRoute.js'
dotenv.config()
dbConfig()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', projectRoute)

app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}`)
})
