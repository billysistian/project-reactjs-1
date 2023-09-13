import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";

const CardProduct = (props) => {
    const {children} = props;
    return (
    <div className="w-full max-w-sm bg-white rounded-lg drop-shadow-md flex flex-col justify-between">
        {children}
    </div>
    );
};

const Header = (props) => {
    const {image, id} = props ;
    return (
        <Link to={`/product/${id}`}>
            <img 
            src={image}
            alt="product" 
            className="p-5 rounded-t-lg h-60 w-full object-cover"
            />
        </Link>
    );
};

const Body = (props) => {
    const {name} = props ;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-lg font-semibold tracking-tight text-gray-700 line-clamp-2">
                    {name}
                </h5>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const {price, id} = props ;
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-m font-bold text-gray-900">
                $ {price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}
            </span>
            <Button classname="text-sm font-semibold bg-yellow-400 transition hover:scale-105" onClick={() => dispatch(addToCart({id, qty:1 }))}>
                Add To Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body ;
CardProduct.Footer = Footer;

export default CardProduct;