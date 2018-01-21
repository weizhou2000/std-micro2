//module.exports = () => 'Hello world'

const m=require('micro')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET','PUT', 'POST'] })
const handler = (req, res) => m.send(res, 200, 'ok!')

module.exports = cors(handler)
