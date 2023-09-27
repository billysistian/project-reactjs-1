import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect , useRef, useState } from "react";
import { login } from "../../services/auth.servis";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem('token', res);
        location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

    return (
      <form onSubmit={handleLogin}>
        {loginFailed && <p className="text-red-500">{loginFailed}</p>}
        <InputForm
          label="Username" 
          type="text" 
          placeholder="johnd"
          name="username"
          ref={userNameRef}
        />
        <InputForm
          label="Password" 
          type="password" 
          placeholder="m38rmF$"
          name="password"
        />
        <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
      </form>
    );
};

export default FormLogin;
