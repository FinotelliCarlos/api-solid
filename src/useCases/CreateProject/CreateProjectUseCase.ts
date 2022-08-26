import { Project } from '../../entities/Project'
import { IProjectsRepository } from '../../repositories/IProjectsRepository'
import { ICreateProjectRequestDTO } from './CreateUserDTO'

export class CreateProjectUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute(data: ICreateProjectRequestDTO) {
    const projectAlreadyExists = this.projectsRepository.findByLink(data.link)

    if (projectAlreadyExists) {
      throw new Error('Project already exists.')
    }

    const project = new Project(data)

    await this.projectsRepository.save(project)
  }
}
