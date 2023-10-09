import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ category }) => {

    const { id, category_name, img, price, description } = category

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 w-96 h-96">
                <img src={img} alt={category_name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <p className='opacity-60'>Price: ${price}</p>
                <p className='opacity-60'>{description}</p>
                <div className="card-actions mt-3">
                    <Link 
                    to={`/details/${id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes = {
    category: PropTypes.object.isRequired,
}