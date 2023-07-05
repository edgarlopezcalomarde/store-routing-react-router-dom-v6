import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <p className="text-4xl font-semibold">404 The resource was not found </p>
      <Link to=".." relative="path" className="hover:underline"> Return back</Link>
      <Link to="/" className="hover:underline"> Return to the Home</Link>
    </section>
  );
}

export default NotFoundPage;
