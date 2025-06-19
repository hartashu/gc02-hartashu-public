const Card = ({ cuisine }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg p-4 transition">
      <a href="" className="cursor-pointer">
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
      </a>
    </div>
  );
};

export default Card;
