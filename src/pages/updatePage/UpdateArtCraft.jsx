import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useNavigation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../extra/Loader";

const UpdateArtCraft = () => {
    const { user } = useContext(AuthContext);
    const loaded = useLoaderData();
    const navigation = useNavigation();
    
    if(navigation.state === 'loading'){
        return <Loader></Loader>
    }
    const { _id, item_name, subcategory_Name, stockStatus, customization, processing_time, short_description, price, rating, image } = loaded;

    const handleUpdateArtCraft = event => {
        event.preventDefault()
        const form = event.target;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const customization = form.customization.value;
        const image = form.image.value;
        const updateCraftItem = { item_name, subcategory_Name, stockStatus, customization, processing_time, short_description, price, rating, image }
        console.log(updateCraftItem)

        fetch(`https://assignment-ten-server-six-eta.vercel.app/myCraftItems/${user?.email}/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateCraftItem)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }
    return (
        <div className="md:w-[70%] py-10 md:p-10 mx-auto my-10 border border-[#14a55f] bg-[#e5f9ef] rounded-md">
            <Helmet>
                <title>Update Page | CraftyCanvas</title>
            </Helmet>
            <div className="text-center space-y-5">
                <h1 className="text-4xl font-semibold">Update Craft Item</h1>
                {/* Form */}
                <form onSubmit={handleUpdateArtCraft}>
                    <div className="w-[90%] mx-auto md:w-[100%]">
                        {/* row-1 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Item_name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="item_name" defaultValue={item_name} placeholder="Enter Item_name" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Subcategory_Name</span>
                                </label>
                                <select name="subcategory_Name" defaultValue={subcategory_Name} className="select select-bordered w-full ">
                                    <option>Landscape Painting</option>
                                    <option>Portrait Drawing</option>
                                    <option>Watercolour Painting</option>
                                    <option>Oil Painting</option>
                                    <option>Charcoal Sketching</option>
                                    <option>Cartoon Drawing</option>
                                </select>
                            </div>
                        </div>
                        {/* row-2 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Customization</span>
                                </label>
                                <select name="customization" defaultValue={customization} className="select select-bordered w-full">
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">StockStatus</span>
                                </label>
                                <select name="stockStatus" defaultValue={stockStatus} className="select select-bordered w-full">
                                    <option>In stock</option>
                                    <option>Made to Order</option>
                                </select>
                            </div>
                        </div>
                        {/* row-3 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Image</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="image" defaultValue={image} placeholder="Enter image URL" className="input input-bordered w-full border-0" required />
                                </label>
                            </div>
                        </div>
                        {/* row-4 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Short_description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="short_description" defaultValue={short_description} placeholder="Enter short_description" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        {/* row-5 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" defaultValue={rating} placeholder="rating" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Processing_time</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="processing_time" defaultValue={processing_time} placeholder="Enter processing_time" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price" defaultValue={price} placeholder="Enter price" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-block mt-6 bg-[#14a55f] text-white text-2xl hover:bg-[#0fbb68] border-0">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateArtCraft;