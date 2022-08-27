import { Router } from 'express'
import { createProjectController } from './useCases/CreateProject'

const router = Router()

router.get('/projects', (req, res) => {
  //all
  return res.status(201).send()
})

router.post('/projects', (req, res) => {
  return createProjectController.create(req, res)
})

router.get('/projects/:id', (req, res) => {
  //see single project
  return res.status(201).send()
})

router.put('/projects/:id', (req, res) => {
  //change a project
  return res.status(201).send()
})

router.delete('/projects/:id', (req, res) => {
  //exclude a project
  return res.status(201).send()
})

export { router }
