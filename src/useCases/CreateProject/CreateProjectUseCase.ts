import { Project } from '../../entities/Project'
import { IMailProvider } from '../../providers/IMailProvider'
import { IProjectsRepository } from '../../repositories/IProjectsRepository'
import { ICreateProjectRequestDTO } from './CreateProjectDTO'

export class CreateProjectUseCase {
  constructor(
    private projectsRepository: IProjectsRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateProjectRequestDTO) {
    const projectAlreadyExists = this.projectsRepository.findByLink(data.link)

    if (projectAlreadyExists) {
      throw new Error('Project already exists.')
    }

    const project = new Project(data)

    await this.projectsRepository.save(project)
  }
}
