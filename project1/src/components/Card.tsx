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
        </div>
    );
};

export default Card;
