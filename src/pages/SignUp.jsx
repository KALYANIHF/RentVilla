import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { app } from "../firebase.config";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  downloadURL,
  getDownloadURL,
} from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
function SignUp() {
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      const db = getFirestore();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const fromdataCopy = { ...formData };
      delete fromdataCopy.password;
      fromdataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), fromdataCopy);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const db = getFirestore();
  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <div>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="name"
              className="nameInput"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
            <input
              type="text"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />
              <img
                onClick={() => setShowPassword((prevState) => !prevState)}
                src={visibilityIcon}
                className="showPassword"
                alt="showpass"
              />
            </div>
            <Link className="forgotPasswordLink" to="/forgotPassword">
              Forgot Password
            </Link>
            <div className="signUpBar">
              <p className="signUpText">Sign Up</p>
              <button className="signUpButton">
                <ArrowRightIcon fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          <Link className="registerLink" to="/signin">
            sign in instade
          </Link>
        </main>

        {/* Google OAuth */}
      </div>
    </div>
  );
}

export default SignUp;
