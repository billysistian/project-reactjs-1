const Button = (props) => {
    const {children ="Register", classname = "bg-black", onClick = () => {}, type = "button"} = props;
    return (
      <button 
      className={`h-10 px-3 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
      >
           {children}
      </button>
    );
  };

  export default Button;