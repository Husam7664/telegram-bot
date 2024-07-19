const { axiosInstance } = require('./axios')

function sendMessage (messageObj, messageText) {
  // const message = {
  //   chat_id: messageObj.chat.id,
  //   text: messageText,
  // }
  return axiosInstance.get('sendMessage', {
    chat_id: messageObj.chat.id,
    text: messageText,
  })
}

function handleMessage (messageObj) {
  const messageText = messageObj?.text || ""
    if (messageText.charAt(0) === '/') {
      const command = messageText.substring(1)
      switch (command) {
        case 'start':
          return sendMessage(messageObj, 'Hi! I am a bot. I can help you to get started')
        case 'help':
          return sendMessage(messageObj, 'This is a help message')
        default:
          return sendMessage(messageObj, 'Hey Hi! I am a bot. I did not understand your command')
      }
    } else {
      return sendMessage(messageObj, messageText)
    }
}

module.exports = { handleMessage }