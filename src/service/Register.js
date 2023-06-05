import axios from "./axios.js";
const AuthServer = {
  async register(name, email, password, avatar) {
    return axios
      .post("/users", { name, email, password, avatar })
      .then((res) => res)
      .then((data) => console.log(data));
    // console.log();
  },
  async login(email, password) {
    return axios.post("/auth/login", { email, password }).then((response) => {
      localStorage.setItem("token", response.data.access_token);
    });
    // console.log();
  },
//   getFun() {
//     return axios
//       .get("/auth/profile", {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       })
//       .then((res) => res)
//       .then((data) => console.log(data));
//   },
};
export default AuthServer;
