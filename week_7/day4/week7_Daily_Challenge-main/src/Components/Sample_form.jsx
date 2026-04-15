function Sample_form({ formData, handleChange, handleSubmit }) {
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 rounded bg-[#deb887]">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-1/2 border border-black rounded"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-1/2 border border-black rounded"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-1/2 border border-black rounded"
                />
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                </div>
                <div className="flex flex-col gap-2 ">
                    <label className="font-bold">Select your destination</label>
                    <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-1/4"
                    >


                        <option value="">-- Please Choose a destination --</option>
                        <option value="Japan">Japan</option>
                        <option value="USA">USA</option>
                        <option value="France">France</option>
                    </select></div>
                <div>
                    <div className="flex flex-col gap-2 mb-2">
                        <label className="font-bold ">Dietary restrictions:</label>

                        <label>
                            <input
                                type="checkbox"
                                name="nutsFree"
                                checked={formData.nutsFree || false}
                                onChange={handleChange}
                            /> Nuts free
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="lactoseFree"
                                checked={formData.lactoseFree}
                                onChange={handleChange}
                            /> Lactose free
                        </label>
                        <label >
                            <input
                                type="checkbox"
                                name="vegan"
                                checked={formData.vegan || false}
                                onChange={handleChange}
                            /> Vegan
                        </label>
                    </div></div>
                <button type="submit" className="w-32 p-2 mt-2 font-bold text-black bg-white border border-black rounded">Submit</button>
            </form>
        </div>
    );
}
export default Sample_form;