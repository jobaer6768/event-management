import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className="my-20">
            <h2 className="text-center text-4xl font-bold">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    categories.map(category => <Service
                        key={category.id}
                        category={category}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;