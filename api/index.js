import * as path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConfig } from './config/db.js'
import projectRoute from './routes/projectRoute.js'
dotenv.config()
dbConfig()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', projectRoute)

app.use(
    express.static(path.join(__dirname, '/<front end app folder name>/build'))
)

app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, '/<front end app folder name>/build', 'index.html')
    )
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Connected to backend`)
})
