const express = require('express')
const app = express()
const apiRoutes = require('./routes/app.routes')

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('src/static'))
app.use('/api/characters',apiRoutes)




app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})