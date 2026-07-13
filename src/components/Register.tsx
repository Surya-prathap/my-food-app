
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../css/Register.css";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

 let navigate = useNavigate();

    let onSubmitLogics = (data: RegisterRequest) => {

        console.log(data);

        // registerSevice(data);

      // Read existing users
      const users: RegisterRequest[] = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

    // Check duplicate email
  const userExists = users.some(
    (user) => user.email === data.email
  );

    if (userExists) {
    alert("Email already registered");
    return;
  }
    // Add id
  const newUser = { id: users.length + 1, ...data};

   // Add new user to array
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successfulll");
        navigate("/login");
        reset();
    }

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit(onSubmitLogics)}>

      <input
        type="text"
        {...register("name")}
        placeholder="Username"
      />

      <br /><br />

      <input
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      <br /><br />

      <input
        type="number"
        {...register("phone")}
        placeholder="Phone"
      />

      <br /><br />

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      <br /><br />

       <select {...register("role")}>
      <option value="ROLE_CUSTOMER">Customer</option>
      <option value="ROLE_ADMIN">Admin</option>
    </select>

      <br /><br />


      <button type="submit">Register</button>

       <br /><br />

       <p>
        Already have an account? <Link to={"/login"}>Login</Link>
       </p>

    </form>
    </div>
  );
}

export default Register;