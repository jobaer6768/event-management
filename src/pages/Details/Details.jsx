import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const categories = useLoaderData();
    const { id } = useParams();

    const category = categories.find(cate => cate.id == id);

    return (
        <div className="container mx-auto h-[90vh]">
            <div className="my-20">
                <img className="w-full" src={category.img} alt="Shoes" />

                <div className="mt-14">
                    <h2 className="card-title text-orange-400 text-4xl font-semibold">
                        {category.category_name}
                    </h2>
                    <p className="mt-6 opacity-60">{category.details}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;