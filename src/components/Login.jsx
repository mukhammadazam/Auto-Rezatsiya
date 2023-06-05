import { useRef } from "react";
import AuthServer from "../service/register";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navegate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const Login = (e) => {
    e.preventDefault();
    AuthServer.login(email.current.value, password.current.value);
    navegate("/Profile");
  };
  return (
    <div>
      <form onSubmit={Login} className='form'>
        <input
          ref={email}
          className='d-block'
          type='email'
          placeholder='Email'
        />
        <input
          ref={password}
          className='d-block'
          type='password'
          placeholder='password'
        />

        <button type='submit' className='form__btn'>
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
