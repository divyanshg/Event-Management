import { Schema, model } from 'mongoose'

let EventSchema = new Schema({
    id: String,
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    location: String,
    entryFee: Number,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    numberOfTickets: Number,
})

export default model('Event', EventSchema)