import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    title: { type: String },
    desc: { type: String },
    githubLink: { type: String },
    externalLink: { type: String },
    mainImg: { type: String },
    images: [String],
})

export default mongoose.model('Project', ProjectSchema)
