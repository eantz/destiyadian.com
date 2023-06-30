import Link from 'next/link'
import sampleProjects from '../constant/projects'
import Header from "../components/header";

function ProjectItem(prop: {keyProp: string, slug: string, logo: string, title: string, tags: Array<string>}) {

    return (
        <Link href={`projects/${prop.slug}`}  className="project-item" key={prop.keyProp}>

            <div className="project-logo-container">
                <img src={`/images/${prop.logo}`} alt={`Logo ${prop.title}`} className="project-logo" />
            </div>
            

            <h3 className="project-title">
                {prop.title}
            </h3>

            <ul className="project-stacks">
                {prop.tags ? prop.tags.map((tag, i) => <li>#{tag}</li>) : ''}
            </ul>
        </Link>
    )
}

export default function Page() {
    const projects = sampleProjects

    const projectItem = Object.keys(projects).map((key: string) => {
        return <ProjectItem keyProp={key} slug={projects[key].slug} logo={projects[key].logo} title={projects[key].title} tags={projects[key].stack} />
    })

    return (
        <div>
            <Header sectionTitle="Projects" />

            <div className="projects">
                {projectItem}
            </div>
        </div>
    )
  }