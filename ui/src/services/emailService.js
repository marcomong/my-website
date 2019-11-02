import axios from 'axios'

function sendEmail (payload, callback) {
  console.log('2')
  axios.post('/email/contactMe', payload)
    .then((res) => {
      return callback(null, res)
    })
    .catch((err) => {
      return callback(err)
    })
}

export default {
  sendEmail
}
