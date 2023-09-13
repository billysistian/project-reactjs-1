import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className="mt-6 table-auto w-full">
      <thead className="bg-yellow-400">
        <tr>
          <th className="px-6 py-4">Product</th>
          <th className="px-6 py-4">Price</th>
          <th className="px-6 py-4">Qty</th>
          <th className="px-6 py-4">Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr className="border-b dark:border-neutral-500" key={item.id}>
                <td className="whitespace-nowrap px-6 py-4">
                  {product.title.substring(0, 55)}..
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  ${" "}
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{item.qty}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  ${" "}
                  {(item.qty * product.price).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr
          className="min-w-full text-left text-sm font-light"
          ref={totalPriceRef}
        >
          <th className="px-6 py-4" colSpan={3}>
            Total Price
          </th>
          <th className="px-6 py-4">
            ${" "}
            {total.toLocaleString("id-ID", {
              styles: "currency",
              currency: "USD",
            })}
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
