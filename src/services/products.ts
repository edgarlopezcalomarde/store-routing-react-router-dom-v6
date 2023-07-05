const baseUrl = "http://localhost:3000/products";

export const getAllProducts = async () => {
  const data = await fetch(baseUrl);
  return data.json();
};


export const getProductById = async (id: string) => {
  const product = await fetch(baseUrl + "/" + id);
  return product.json();
};
