import { useState } from "react";
import { NavLink } from "react-router-dom";
import SupportNav from "../components/SupportNav";
import PageNav from "../components/PageNav";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <SupportNav />
      <PageNav />
      <div className="m-5 grid grid-cols-2 grid-rows-1 ">
        <div className="ml-40 mt-10">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4 text-xl font-semibold text-zinc-600 ">
              Login to your account
            </h1>

            <h2>Email Adress</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input mb-8 w-72"
            />
            <h2>Password</h2>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input mb-8 w-72"
            />
            <h2>Forgot Password?</h2>

            {email !== "" && password !== "" && (
              <div>
                <button className="mt-7 rounded-lg bg-zinc-900 p-3 font-semibold text-zinc-50">
                  Sign In
                </button>
                <span>&nbsp;or&nbsp;</span>
                <span className="underline-offset-8">return to store</span>
              </div>
            )}
          </form>
        </div>

        <div className="mt-10">
          <h1 className="mb-4 text-xl font-semibold text-zinc-600">
            Create New Account
          </h1>
          <h2 className="font-semibold text-zinc-400">
            Register your account for a faster checkout process.
          </h2>
          <button className="mt-7 rounded-lg bg-zinc-900 p-3 font-semibold text-zinc-50">
            <NavLink to="/register">Create Account</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
