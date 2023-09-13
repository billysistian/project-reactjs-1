import { Link } from "react-router-dom";

const GetStartedPage = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-2xl font-extrabold sm:text-4xl">
            Portfolio Frontend React JS <br/>
            <strong className="font-extrabold text-yellow-700 sm:block">
               by Billy Sistian Putra
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Dibuat menggunakan Vite + React JS, Tailwind CSS, HyperUI,  Axios, Redux, FakestoreAPI
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-yellow-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-600 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
              to="/login"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-black-600 shadow hover:text-black-700 focus:outline-none focus:ring active:text-black-500 sm:w-auto"
              to="/products"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedPage;
