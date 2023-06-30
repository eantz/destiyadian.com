import sampleProjects from '../../constant/projects'
import Header from "../../components/header";

function ProjectImage(prop: {i: number, thumb:string, full: string}) {

    return (
        <div className="project-thumbnail" key={prop.i} >
            <img src={`/images/${prop.thumb}`} alt="thumb" />
        </div>
    )
}

export default function Page({ params }: { params: { slug: string } }) {
    const {slug} = params

    const project = sampleProjects[slug]

    const projectImages = project.images.map((image, i) => {
        return (
            <ProjectImage i={i} thumb={image.thumb} full={image.full} />
        )
    })

    return (
        <div>

            <Header sectionTitle={project.title} />

            <div className="project-single">
                <img src={`/images/${project.logo}`} alt={`Logo ${project.title}`} className="project-logo" />

                <a href={project.url} target="_blank" className="project-url">{project.url}</a>

                <ul className="project-stacks">
                    {project.stack.map((stack, i) => <li key={i}>#{stack}</li>)}
                </ul>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-images">
                    {projectImages}
                </div>

            
            </div>
        
      </div>
    )
}