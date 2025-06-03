import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebas/firebase.init";
import { useState } from "react";

const Register = () => {
    const [errors, setErrors] = useState()
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()
    console.log("register is ok");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    setErrors('')
    setSuccess(false)
    
    if(password.length<6){
        setErrors("Password Must be 6 character need")
        return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if(!passwordRegex.test(password)){
        setErrors('password must be 8ch, and one uppercase,lowercase and one special ch need')
        return
    }

    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.user)
        setSuccess(true)
    })
    .catch(error=>{
        console.log(error)
        setErrors(error.message)
        setSuccess(false)
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
            <div className="form-control relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
                <button onClick={()=> setShowPassword(!showPassword)} 
                 className="text-red-500 absolute right-2 top-2">{
                  showPassword? "Hide":"Show"
                 }
                </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary px-9">Sign Up</button>
            </div>
          </form>
          {
            errors && <p className="text-red-600">{errors}</p>
          }
          {
            success && <p className="text-green-800">SignUp Seccessfully complete</p>
          }
        </div>
  );
};

export default Register;
