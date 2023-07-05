import { useLoaderData } from "react-router-dom";
import { Product } from "../models/Product";

function ProductPreviewPage() {
  const product = useLoaderData() as Product;
  return (
    <section>
      <h2>Article {product.name}</h2>
      <p>Price: {product.price}€</p>

      <p>Category : {product.category}</p>
    </section>
  );
}

export default ProductPreviewPage;
