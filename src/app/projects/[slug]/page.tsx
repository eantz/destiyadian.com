'use client'

import sampleProjects from '../../constant/projects'
import Header from "../../components/header";
import { useState, useEffect } from 'react';
import ModalImage from '@/app/components/modal-image';

function ProjectImage(prop: {thumb:string, full: string, handleOnClick: any}) {    
    return (
        <div className="project-thumbnail" onClick={() => prop.handleOnClick({image: prop.full, showModal: true})} >
            <img src={`/images/${prop.thumb}`} alt="thumb" />
        </div>
    )
}

export default function Page({ params }: { params: { slug: string } }) {
    const [ modalParam, setModalParam ] = useState({image: "", showModal: false})
    const {slug} = params

    const project = sampleProjects[slug]

    function handleCloseModal() {
        setModalParam({image: "", showModal: false})
    }

    const projectImages = project.images.map((image, i) => {
        return (
            <ProjectImage key={i} thumb={image.thumb} full={image.full} handleOnClick={setModalParam} />
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
        
            <ModalImage image={modalParam.image} showModal={modalParam.showModal} handleCloseModal={handleCloseModal} />
      </div>
    )
}