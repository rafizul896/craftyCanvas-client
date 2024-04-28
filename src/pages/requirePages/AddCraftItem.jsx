import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddCraftItem = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    
    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const customization = form.customization.value;
        const image = form.image.value;
        const newCraftItmes = { user_name, user_email, item_name, subcategory_Name, stockStatus, customization, processing_time, short_description, price, rating, image }
        console.log(newCraftItmes)

        fetch('http://localhost:5000/craftItmes', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCraftItmes)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className="md:w-[70%] py-10 md:p-10 mx-auto my-10 bg-[#F4F3F0] rounded-md">
            <div className="text-center space-y-5">
                <h1 className="text-4xl text-[#314151] rancho">Add Craft Item</h1>
                <p className="raleway text-center px-2 md:px-0 lg:max-w-[70%] mx-auto">
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                {/* Form */}
                <form onSubmit={handleAddCoffee}>
                    <div className="w-[90%] mx-auto md:w-[100%]">
                        {/* row-1 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={displayName} type="text" name="user_name" placeholder="Enter your name" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">User Email</span>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={email} type="email" name="user_email" placeholder="Enter your email" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        {/* row-2 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Item_name</span>
                                </label>
                                <select name="item_name" className="select select-bordered w-full">
                                    <option>Landscape Painting</option>
                                    <option>Portrait Drawing</option>
                                    <option>Watercolour Painting</option>
                                    <option>Oil Painting</option>
                                    <option>Charcoal Sketching</option>
                                    <option>Cartoon Drawing</option>
                                </select>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Subcategory_Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="subcategory_Name" placeholder="Enter subcategory_Name" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        {/* row-3 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Customization</span>
                                </label>
                                <select name="customization" className="select select-bordered w-full max-w-xs">
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">StockStatus</span>
                                </label>
                                <select name="stockStatus" className="select select-bordered w-full max-w-xs">
                                    <option>In stock</option>
                                    <option>Made to Order</option>
                                </select>
                            </div>
                        </div>
                        {/* row-4 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Image</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="image" placeholder="Enter image URL" className="input input-bordered w-full border-0" required />
                                </label>
                            </div>
                        </div>
                        {/* row-5 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Short_description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="short_description" placeholder="Enter short_description" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        {/* row-6 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="rating" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Processing_time</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="processing_time" placeholder="Enter processing_time" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price" placeholder="Enter price" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-block mt-6 bg-[#D2B48C] text-[#331A15] border-2 border-[#331A15] rancho text-2xl hover:bg-[#d5a566] hover:border-0">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;