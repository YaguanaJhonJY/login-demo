import React ,{ useState }from "react";
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    usuario: "",
    password: "",
    remember: true,
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="App" >
      <h1>LOGIN</h1>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Usuario
        </span>
        <input
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="usuario"
          name="usuario"
          type="text"
          placeholder="Usuario"
          onChange={handleChange}
        ></input>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Contraseña
        </span>
        <input
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="Password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          name="remember"
          id="flexCheckChecked"
        ></input>

        <label class="form-check-label" for="flexCheckChecked">
          Remember
        </label>
      </div>
      <button
        type="button"
        class="btn btn-dark"
        onClick={(e) => console.log(user)}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
