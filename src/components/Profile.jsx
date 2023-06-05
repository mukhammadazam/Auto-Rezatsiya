import { useEffect, useState } from "react";
import axios from "../service/axios.js";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setdata] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!localStorage.getItem("token")) navigate("/");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response)
        .then((data) => setdata(data.data));
    }
  }, []);
  return (
    <div className='container pt-5'>
      <div className='profil pt-5 d-flex align-items-center justify-content-center'>
        <div className=''>
          <img src={data?.avatar} alt='' width='300' height='300' />
          <h1 className="text-center">{data?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
