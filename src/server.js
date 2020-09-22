const app = require('./app')
require('./database')

const PORT = 3333

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`)
})