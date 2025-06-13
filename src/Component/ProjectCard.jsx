import React from 'react'

const ProjectCard = ({ img}) => (
    <div className={`bg-gray-800/50 rounded-2xl overflow-hidden group hover:bg-gray-800/70 transition-all duration-300` }>
       <img src={img} alt="frame1" />
       
    </div>
);

export default ProjectCard