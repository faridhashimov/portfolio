import mongoose from 'mongoose'

export const dbConfig = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Db connected on ${conn.connection.host}`)
    } catch (error) {
        throw error
    }
}