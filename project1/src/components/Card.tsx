import { FaHeart } from "react-icons/fa";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const Card = ({ title, description, imageUrl, link }: CardProps) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{link}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
                <FaHeart className="inline mr-2" />
                Like
            </button>
        </div>
    );
};

export default Card;
