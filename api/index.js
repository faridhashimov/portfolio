// import * as path from 'path'
// import { fileURLToPath } from 'url'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConfig } from './config/db.js'
import projectRoute from './routes/projectRoute.js'
dotenv.config()
dbConfig()

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api', projectRoute)

// Serve frontend
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../','frontend', 'build', 'index.html'))
//     })
// } else {
//     app.get('/', (req, res) => {
//         res.send('Please set to production!')
//     })
// }

app.listen(process.env.PORT || 5000, () => {
    console.log(`Connected to backend`)
})
