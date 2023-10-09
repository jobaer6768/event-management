import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import Project from "../../components/Project/Project";


const Gallery = () => {

    const { loading } = useContext(AuthContext);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])

    if (loading) {
        return <div className="flex justify-center items-center h-[60vh] text-6xl">
            <span className="loading loading-spinner text-primary">
            </span></div>
    }

    return (
        <div>
            <h2 className="text-4xl text-center my-10">Our Recent Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
            }
            </div>
        </div>
    );
};

export default Gallery;