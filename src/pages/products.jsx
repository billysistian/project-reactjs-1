import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
        <div
          className={`py-6 max-w-6xl mx-auto px-3 ${isDarkMode && "bg-slate-900"}`}
        >
          <h2 className={`text-2xl font-bold tracking-tight text-gray-900 ${isDarkMode && "text-white"}`}>
            Product
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body name={product.title} />
                  <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
              ))}
          </div>
        </div>
    </Fragment>
  );
};

export default ProductsPage;
