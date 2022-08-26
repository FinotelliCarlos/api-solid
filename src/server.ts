import { app } from './app'

app.listen(process.env.PORT || 4004, () => {
  console.log('Server is connected!')
})
