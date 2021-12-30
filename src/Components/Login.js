import React, { useState } from "react";
import "../App.css";

function Login() {
  const [values, setValues] = useState({email:"",password:""});
 


  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // const getDetails = async () => {
  //   let fd = new FormData();
  //   fd.append("registeredEmail", setEmail);
  //   fd.append("registeredPassword", setPassword);
  //   fd.append("funcName", "verifyLogin");
  // };
  // let detailsFromSever = await fetch(
  //   "https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php",
  //   {
  //     method: "post",
  //     body: fd,
  //   }
  // );
  // let convertedData = await detailsFromSever.json();
  // console.log(convertedData);

  return (
    <div className="formContainer">
      
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
        alt=""
      />
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          {/* UserName */}
          <label>
            Email
            <input
              type="email"
              value={values.email}
              onChange={(e) => setValues({...values,email:e.target.value})}
            ></input>
          </label>
          {/* Password */}
          <label>
            Password
            <input
              type="password"
              value={values.password}
              onChange={(e) => setValues({...values,password:e.target.value})}
            ></input>
          </label>
          <button>Sign-In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
