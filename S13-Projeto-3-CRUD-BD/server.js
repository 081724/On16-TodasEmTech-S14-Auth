// 1. importa o app(api)
// 2. definir uma porta e ouvi-la
const app = require('./src/app')

const DB_PORT = process.env.DB_PORT

app.listen(DB_PORT,() => console.log(`fé no pai que agora vai, porta: ${DB_PORT}`))
