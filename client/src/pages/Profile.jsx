import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          id="username"
          type="text"
          placeholder="username"
          className="border p-2 rounded-xl mt-3"
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          className="border p-2 rounded-xl mt-3"
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          className="border p-2 rounded-xl mt-3"
        />
        <button className="bg-slate-700 rounded-md text-white p-2 uppercase hover:opacity-75 disabled:opacity-30">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-500 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
