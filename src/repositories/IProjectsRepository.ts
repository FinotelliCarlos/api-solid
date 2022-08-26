import { Project } from '../entities/Project'

export interface IProjectsRepository {
  findByLink(link: string): Promise<Project>
  save(project: Project): Promise<void>
}
