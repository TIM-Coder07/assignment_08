export const getTilesDetailsById = async (id) => {
  const res = await fetch(`https://assignment-08-fake-server.onrender.com/products/${id}`);
  const data = await res.json();
  const details = data;
  return details;
};
