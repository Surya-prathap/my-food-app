
import { useForm } from "react-hook-form";
import type { LoginRequest } from "../interfaces/LoginRequest";
import { Link } from "react-router-dom";
import type { RegisterRequest } from "../interfaces/RegisterRequest";


function Login() {

  const { register, handleSubmit, reset } = useForm<LoginRequest>();

  const onSubmitLogics = (data: LoginRequest) => {

    console.log(data);

    // Read all registered users from localStorage
    const users: RegisterRequest[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Check whether user exists
    const user = users.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password
    );

    if (user) {

      alert("Login Successful");

      // Store logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      reset();
        window.location.href = "/";
    } else {

      alert("Invalid Email or Password");

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLogics)}>

      <input
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      <br /><br />


      <input
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      <br /><br />


      <button type="submit">Login</button>

      <br /><br />

      <p>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>

    </form>
  );
}

export default Login;