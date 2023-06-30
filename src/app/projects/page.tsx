import Link from 'next/link'
import sampleProjects from '../constant/projects'
import Header from "../components/header";

type projectItem = {
    slug: string,
    logo: string,
    title: string,
    tags: Array<string>
}

function ProjectItem({slug, logo, title, tags}: projectItem) {

    return (
        <Link href={`projects/${slug}`}  className="project-item">

            <div className="project-logo-container">
                <img src={`/images/${logo}`} alt={`Logo ${title}`} className="project-logo" />
            </div>
            

            <h3 className="project-title">
                {title}
            </h3>

            <ul className="project-stacks">
                {tags ? tags.map((tag, i) => <li>#{tag}</li>) : ''}
            </ul>
        </Link>
    )
}

export default function Page() {
    const projects = sampleProjects

    const projectItem = Object.keys(projects).map((key: string) => {
        return <ProjectItem slug={projects[key].slug} logo={projects[key].logo} title={projects[key].title} tags={projects[key].stack} />
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