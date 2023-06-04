import axios from "./axios.js";
const AuthServer = {
  async register(name, email, password, avatar) {
    return axios.post("/users", { name, email, password, avatar }).then((res)=>console.log(res))
    // console.log();
  },
};
export default AuthServer;
