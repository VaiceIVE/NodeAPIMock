require('dotenv').config()
const express = require('express')
const cors = require('cors')
const DataRouter = require('./Routers/DataRouter')

const PORT = process.env.PORT || 8002;
const app = express();


app.use(cors({credentials: true, origin:[]}))

app.use(express.static('./Static/'))

app.use(DataRouter)





app.listen(PORT, () => {console.log(`Listening ${PORT}!`)})
