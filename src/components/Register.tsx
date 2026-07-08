
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { useForm } from "react-hook-form";
import { serviceRegister } from "../services/AuthService";
import { Link } from "react-router-dom";
import "../css/Register.css";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

 const onSubmitLogics = async (data:RegisterRequest) => {
      try {
            const response = await serviceRegister(data);
            alert("Registration Success");
            console.log(response);
            reset();
        } catch (error) {
            console.log(error);
        }
  };

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