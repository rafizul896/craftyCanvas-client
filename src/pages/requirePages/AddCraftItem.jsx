import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

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

        fetch('https://assignment-ten-server-six-eta.vercel.app/craftItems', {
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
                        text: 'New Craft Itmes Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className="md:w-[70%] py-10 md:p-10 mx-auto my-10 border border-[#14a55f] bg-[#e5f9ef]  rounded-md">
            <Helmet>
                <title>Add Craft Item | CraftyCanvas</title>
            </Helmet>
            <div className="text-center space-y-5">
                <h1 className="text-4xl text-black rancho">Add Craft Item</h1>
                <p className="raleway text-center px-2 md:px-0 lg:max-w-[70%] mx-auto">
                Add Craft Item is your online destination for unique and handcrafted treasures. Browse our curated selection of artisanal creations, from exquisite paintings to intricate drawings. Discover the perfect piece to adorn your space or gift to a loved one. With Add Craft Item, bring a touch of creativity and charm into your life.
                </p>
                {/* Form */}
                <form onSubmit={handleAddCoffee}>
                    <div className="w-[90%] mx-auto md:w-[100%]">
                        {/* row-1 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-black">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={displayName} type="text" name="user_name" placeholder="Enter your name" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-black">User Email</span>
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
                                    <span className="label-text text-xl font-medium text-black">Item_name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="item_name" placeholder="Enter Item_name" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-black">Subcategory_Name</span>
                                </label>
                                <select name="subcategory_Name" className="select select-bordered w-full">
                                    <option>Landscape Painting</option>
                                    <option>Portrait Drawing</option>
                                    <option>Watercolour Painting</option>
                                    <option>Oil Painting</option>
                                    <option>Charcoal Sketching</option>
                                    <option>Cartoon Drawing</option>
                                </select>
                            </div>

                        </div>
                        {/* row-3 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-black">Customization</span>
                                </label>
                                <select name="customization" className="select select-bordered w-full max-w-xs">
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-black">StockStatus</span>
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
                                    <span className="label-text text-xl font-medium text-black">Image</span>
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
                                    <span className="label-text text-xl font-medium text-black">Short_description</span>
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
                                    <span className="label-text text-xl font-medium text-black">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="rating" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-black">Processing_time</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="processing_time" placeholder="Enter processing_time" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium text-black">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price" placeholder="Enter price" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-block mt-6 bg-[#14a55f] text-white rancho text-2xl hover:bg-[#0fbb68]">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;