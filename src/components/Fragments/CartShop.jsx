import { useEffect, useState } from "react";
import TableCart from "./TableCart";
import { getProducts } from "../../services/product.service";

const CartShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
        <div className="py-6 max-w-6xl mx-auto px-3">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Cart
            </h2>
            <TableCart products={products} />
        </div>
  );
};

export default CartShop;
