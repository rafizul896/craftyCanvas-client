import { Link, useLoaderData } from "react-router-dom";

const AllCraftItems = () => {
    const loadedCraftItems = useLoaderData();
    const { user_name, item_name, subcategory_Name, stockStatus, customization, processing_time, short_description, price, rating, image } = loadedCraftItems;

    return (
        <div className="overflow-x-auto">
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>subcategory_Name</th>
                        <th>stockStatus</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                {
                    loadedCraftItems.map((item, indx) => <tbody key={item._id}>
                        <tr>
                            <th>{indx + 1}</th>
                            <td>{item.item_name}</td>
                            <td>{item.subcategory_Name}</td>
                            <td>{item.stockStatus}</td>
                            <td>{item.rating}</td>
                            <td>${item.price}</td>
                            <td>
                                <Link to={`/allCraftItems/${item._id}`}>
                                    <button className="mt-4 px-3 py-2 border w-full rounded-full">View Details”</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default AllCraftItems;