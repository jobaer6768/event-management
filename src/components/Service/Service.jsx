import PropTypes from 'prop-types';

const Service = ({ category }) => {

    const { category_name, img, description } = category

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 w-96 h-96">
                <img src={img} alt={category_name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <p className='opacity-60'>{description}</p>
                <div className="card-actions mt-3">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes = {
    category: PropTypes.object.isRequired,
}