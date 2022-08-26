import { response, Router } from 'express'

const router = Router()

router.get('/projects', (req, res) => {
  //all
  return response.status(201).send()
})

router.post('/projects', (req, res) => {
  //create a project
  return response.status(201).send()
})

router.get('/projects/:id', (req, res) => {
  //see single project
  return response.status(201).send()
})

router.put('/projects/:id', (req, res) => {
  //change a project
  return response.status(201).send()
})

router.delete('/projects/:id', (req, res) => {
  //exclude a project
  return response.status(201).send()
})

export { router }
