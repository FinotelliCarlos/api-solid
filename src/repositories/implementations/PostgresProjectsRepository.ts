import { Project } from '../../entities/Project'
import { IProjectsRepository } from '../IProjectsRepository'

export class PostgresProjectsRepository implements IProjectsRepository {
  private projects: Project[] = []

  async findByLink(link: string): Promise<Project> {
    const project = this.projects.find(project => project.link === link)

    return project
  }

  async save(project: Project): Promise<void> {
    this.projects.push(project)
  }
}
