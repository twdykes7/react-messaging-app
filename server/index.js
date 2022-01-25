const express = require('express')
const bodyParser = require('body-parser')
const port = 3080

const cors = require('cors')
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

require('dotenv').config()

const accountSID = process.env.TWILIO_ACCOUNT_SID
const authTOKEN = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSID, authTOKEN)

const sendSMS = (to, msg) => {
  client.messages.create({
    to: to,
    from: process.env.MY_TWILIO_PHONE_NUMBER,
    body: msg
  })
  .then((message) => {console.log(message.sid)})
  .done()
}
// client.messages.create({
//   to: process.env.MY_PERSONAL_PHONE_NUMBER,
//   from: process.env.MY_TWILIO_PHONE_NUMBER,
//   body: 'Hang the sense of if and stay busy, I\'d much rather be happy then right any day of the week.'
// })
// .then((message) => {console.log(message.sid)})

app.post('/sms', (req, res) => {
  let number = req.body.number
  let message = req.body.message

  sendSMS(number, message)
  res.send(`Message sent to ${number}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})