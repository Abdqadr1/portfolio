import { useParams } from "react-router";

import projects from "./allproject";

const ProjectDetails = () => {
    const { name } = useParams();
    const project = projects.find(p => p.name === name);
    if (!project) return <h3 className="fw-bold mt-5">Not found</h3>
    return ( 
        <>
            <div>{project.type}</div>
        </>
     );
}
 
export default ProjectDetails;