import { useRef } from "react";
import "./Register.scss";
import AuthServer from "../service/register";
import axios from "../service/axios.js";
const Register = () => {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const avatar = useRef("");

  const register = async (e) => {
    e.preventDefault();
    AuthServer.register(
      name.current.value,
      email.current.value,
      password.current.value,
      avatar.current.value
    );
  };
  return (
    <div className='container'>
      <form onSubmit={register} className='form'>
        <input
          ref={name}
          className='d-block'
          type='text'
          placeholder='firstName'
        />

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
        <input
          ref={avatar}
          className='d-block'
          type='url'
          placeholder='avatar'
        />
        <button type='submit' className='form__btn'>
          submit
        </button>
      </form>
    </div>
  );
};

export default Register;
// //  const res = await axios.get("/products");
// // console.log(res)
