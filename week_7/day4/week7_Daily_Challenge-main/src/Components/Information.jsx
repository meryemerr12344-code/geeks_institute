function Information() {
    return (
        <div className="bg-[#1e5555]">
            <h1 className="p-3 text-2xl font-bold text-white">Entered information:</h1>
            <div className="flex flex-col gap-4 p-3 text-lg text-white text-style-oblique">
                <p>Your Name: {new URLSearchParams(window.location.search).get("firstName")} {new URLSearchParams(window.location.search).get("lastName")}</p>
                <p>Your Age: {new URLSearchParams(window.location.search).get("age")}</p>
                <p>Your Gender: {new URLSearchParams(window.location.search).get("gender")}</p>
                <p>Your Destination: {new URLSearchParams(window.location.search).get("destination")}</p>
                <p>Your dietary restrictions:</p>
                <div className="ml-4">
                    <p>**Nuts free: {new URLSearchParams(window.location.search).get("nutsFree") === "on" ? "Yes" : "No"}</p>
                    <p>**Lactose free: {new URLSearchParams(window.location.search).get("lactoseFree") === "on" ? "Yes" : "No"}</p>
                    <p>**Vegan: {new URLSearchParams(window.location.search).get("vegan") === "on" ? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
    );
}

export default Information;