import { Request, Response } from 'express'
import { CreateProjectUseCase } from './CreateProjectUseCase'

export class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  async create(req: Request, res: Response): Promise<Response> {
    const { title, description, image, link } = req.body

    try {
      await this.createProjectUseCase.execute({
        title,
        description,
        image,
        link
      })

      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
