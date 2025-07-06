import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const Card = ({ title, description, imageUrl, link }: CardProps) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
                <a href={link} className="text-blue-600 text-sm mt-2 block hover:underline">
                    Visit Link
                </a>

                <button
                    onClick={handleLike}
                    className="mt-4 flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    <FaHeart className={`mr-2 ${liked ? "text-red-500" : "text-white"}`} />
                    {liked ? "Liked" : "Like"}
                </button>
            </div>
        </div>
    );
};

export default Card;
