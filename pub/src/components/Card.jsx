import { Link } from "react-router";

const Card = ({ cuisine }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg p-4 hover:scale-105 transition  duration-300">
      <Link to={`/${cuisine.id}`} className="cursor-pointer">
        <img
          src={cuisine.imgUrl}
          alt={cuisine.name}
          className="w-full h-96 object-cover rounded mb-4"
        />
        <div className="flex justify-between font-semibold mb-2">
          <p>{cuisine.name}</p>
          <p className="font-bold text-xl">Rp. {cuisine.price}</p>
        </div>
        <p className="text-sm text-gray-600">{cuisine.description}</p>
      </Link>
    </div>
  );
};

export default Card;
