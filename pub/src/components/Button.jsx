import { Link, useParams } from "react-router";

export default function Button({ buttonName }) {
  const { id } = useParams();

  return (
    <>
      <Link to="" href="" className="hover:underline font-semibold">
        {buttonName}
      </Link>
    </>
  );
}
