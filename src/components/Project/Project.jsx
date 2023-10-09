import PropTypes from 'prop-types';

const Project = ({ project }) => {

    const { img, project_name } = project;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 w-96 h-96">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{project_name}</h2>
            </div>
        </div>
    );
};

export default Project;

Project.propTypes = {
    project: PropTypes.object
}