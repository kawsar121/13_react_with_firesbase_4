import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebas/firebase.init";
import { useState } from "react";

const Register = () => {
    const [errors, setErrors] = useState()
  const handleRegister = (e) => {
    e.preventDefault()
    console.log("register is ok");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    setErrors('')

    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error)
        setErrors(error.message)
    })
  };

  return (
        <div className="card bg-base-100 mx-auto mt-28 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-4xl font-bold">Login now!</h3>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary px-9">Login</button>
            </div>
          </form>
          {
            errors && <p>{errors}</p>
          }
        </div>
  );
};

export default Register;
