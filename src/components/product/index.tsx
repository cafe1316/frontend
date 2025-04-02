export default function Product({title, price, image, description}: {title: string, price: string, image: string, description: string}) {
    return (
        <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 card-hover">
            <div className="mb-4">
                <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h3 className="font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <div className="flex justify-between items-center">
                <span className="font-bold">¥{price}</span>
                <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </div>
    )
}