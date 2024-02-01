import React from 'react';
import Project from '../interfaces/Project';

interface ProjectBlurbProps {
    project: Project;
}

function ProjectBlurb({ project }: ProjectBlurbProps) {
    return (
        <div>
            <h3>{project.title}</h3>
            <div className="picture-frame">
                <img className="project-picture" src={project.imageSrc} alt={project.title} />
            </div>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectBlurb;
