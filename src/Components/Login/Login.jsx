import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebas/firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [logsuc, setLogsuc] = useState(false);
  const [logErr, setLogerr] = useState("");
  const emailRef = useRef()

  const handleLog = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLogerr();
    setLogsuc(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setLogsuc(true);
      })
      .catch((error) => {
        console.log(error);
        setLogerr(error.message);
        setLogsuc(false);
      });
    
  };
  const handleReset = () => {
    const email = emailRef.current.value
    console.log(email)
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("send pass");
        })
        .catch((error) => {
          console.log(error);
        });

    };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-4xl font-bold">Login now!</h1>
      <form onSubmit={handleLog} className="card-body">
        <div className="form-control">
          <input
            type="email"
            name="email"
            placeholder="email"
            ref={emailRef}
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
          <label onClick={handleReset} className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        {logsuc && <p className="text-green-600">SuccessFul login</p>}
        {logErr && (
          <p className="text-red-700">
            Invalid email/password. please correct this
          </p>
        )}
      </form>
      <p>
        You are a new user? please{" "}
        <Link className="text-blue-600" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
