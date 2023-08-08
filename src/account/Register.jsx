import { useState } from "react";
import SupportNav from "../components/SupportNav";
import PageNav from "../components/PageNav";
import { NavLink } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <SupportNav />
      <PageNav />
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="grid grid-cols-1">
          <form className="mx-auto mt-10 max-w-sm" onSubmit={handleSubmit}>
            <h1 className="mb-5 text-3xl font-semibold">Register</h1>
            <div className="mb-4">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input h-[30px] w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input h-[30px] w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input h-[30px] w-full rounded-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input h-[30px] w-full rounded-md"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="emailOffers" className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="emailOffers"
                  defaultChecked
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2">
                  Yes, sign me up for emails to get exclusive offers
                </span>
              </label>
            </div>
            <button
              onClick={() => alert("registered")}
              className="mt-3 rounded-lg bg-zinc-900 p-3 font-semibold text-zinc-50"
            >
              Register
            </button>
            <NavLink to="/shop">
              <span className="underline-offset-8">return to store</span>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
