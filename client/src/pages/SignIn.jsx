import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  logInStart,
  logInSuccess,
  LogInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const LogIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }
  async function submitHandler(event) {
    event.preventDefault();
    try {
      dispatch(logInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(LogInFailure(data.message));
        return;
      }
      dispatch(logInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(LogInFailure(error.message));
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Log In</h1>
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-xl"
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-xl"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-xl uppercase hover:opacity-75 disabled:opacity-30"
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Do not have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && (
        <div className="flex justify-between items-center">
          <p className="bg-red-500 text-white mt-5 py-2 px-5 flex-1">{error}</p>
          <p className="bg-red-500 text-white text-2xl mt-5 py-2 pr-5">
            <BiErrorCircle />
          </p>
        </div>
      )}
    </div>
  );
};

export default LogIn;
