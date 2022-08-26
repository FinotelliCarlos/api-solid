import { uuid } from 'uuidv4'

export class Project {
  public readonly id: string

  public title: string
  public description: string
  public image: string
  public link: string

  constructor(props: Omit<Project, 'id'>, id?: string) {
    this.title = props.title
    this.description = props.description
    this.image = props.image
    this.link = props.link

    if (!id) {
      this.id = uuid()
    }
  }
}
