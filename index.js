const express = require('express')
const PORT  = 4040
const { handler } = require('./controller')
const app = express()
app.use(express.json())

app.post("*", async (req, res) => {
  console.log(req.body)
  // res.send('Hello')
  res.send(await handler(req))
})

app.get("*", async (req, res) => {
  res.send(await handler(req))
  // res.send('Hello Get')
})

app.listen(PORT, (err) => {
  if(err) {
    console.log('Error in starting server', err)
    return
  }
  console.log(`Server is running on port ${PORT}`)
})

// `https://api.telegram.org/bot${process.env.BOT_TOKEN}/setWebhook?url=${process.env.WEBHOOK_URL}`