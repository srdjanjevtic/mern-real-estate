import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-xl"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-xl"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-xl"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-xl uppercase hover:opacity-75 disabled:opacity-30">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/">
          <span className="text-blue-700">Log In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
