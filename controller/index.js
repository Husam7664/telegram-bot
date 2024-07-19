const { handleMessage } = require("./lib/telegram")

async function handler(req, method) {
  const { body } = req
  if(body) {
    console.log('Request Body:', body)
    const messageObj = body.message
    await handleMessage(messageObj)
  }
  return 
}

module.exports = {
  handler
}