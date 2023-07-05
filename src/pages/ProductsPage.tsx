import { routes } from "../helpers/routes";
import { Product } from "../models/Product";
import { useLoaderData, Link } from "react-router-dom";

function ProductsPage() {
  const products = (useLoaderData() as Array<Product>) ?? [];

  return (
    <div>
      <h2 className="text-4xl font-semibold">Products</h2>
      <ul className="flex flex-col gap-4 mt-2">
        {products.map((product: Product) => (
          <li key={product.id} className="p-4 bg-slate-700 flex-1 border rounded-lg cursor-pointer">
            <Link to={routes[2].path + "/" + product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
