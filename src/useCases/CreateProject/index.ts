import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider'
import { PostgresProjectsRepository } from '../../repositories/implementations/PostgresProjectsRepository'
import { CreateProjectController } from './CreateProjectController'
import { CreateProjectUseCase } from './CreateProjectUseCase'

const mailtrapMailProvider = new MailTrapMailProvider()
const postgresProjectsRespository = new PostgresProjectsRepository()

const createProjectUseCase = new CreateProjectUseCase(
  postgresProjectsRespository,
  mailtrapMailProvider
)

const createProjectController = new CreateProjectController(
  createProjectUseCase
)

export { createProjectUseCase, createProjectController }
