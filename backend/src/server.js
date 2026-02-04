import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()


//middleware
app.use(cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Autorization']
}))

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`);

})

dotenv.config()