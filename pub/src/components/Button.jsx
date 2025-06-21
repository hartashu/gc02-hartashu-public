import { Link, useParams } from "react-router";

export default function Button({ buttonName }) {
  const { id } = useParams();

  return (
    <>
      <Link
        to="https://gc02-hartashu-public-cms.vercel.app/login"
        href=""
        className="hover:underline font-semibold"
      >
        {buttonName}
      </Link>
    </>
  );
}
