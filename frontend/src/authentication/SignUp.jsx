import React, { useState } from "react";
import validator from 'validator'
import Image from './background4.jpg'
import Logo from './LogoT.png'


function SignUp() {
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("role")

  const [passwordErrorMessege, setPasswordErrorMessage] = useState(false);
  const [confirmPasswordErrorMessege, setConfirmPasswordErrorMessage] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false)

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 8) {
      setPasswordErrorMessage(true);
    } else {
      setPasswordErrorMessage(false);
    }
    console.log(password)
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (validator.equals(confirmPassword,password)) {
      setConfirmPasswordErrorMessage(false);
      // console.log(confirmPassword)
    } else {
      setConfirmPasswordErrorMessage(true);
    }

    console.log(confirmPassword)
  }

  const handleFirstName = (e) => {
    setFirst(e.target.value);
    if (first === ''){
      setFirstNameErrorMessage(true);
    }
    else
      setFirstNameErrorMessage(false);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    var email = e.target.value
    if (validator.isEmail(email)) {
      setEmailErrorMessage(false)
    }
    else if (email === '') {
      setEmailErrorMessage(true)
    }
    else
      setEmailErrorMessage(true)
  }

  const clearForm = () => {
    setEmail("")
    setFirst("")
    setConfirmPassword("")
    setPassword("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((!firstNameErrorMessage && !passwordErrorMessege && !emailErrorMessage && role !== "role")){
      alert("Account Created !!")
    }else{
      alert("Fill the details properly....")
      clearForm()
    }
  }

  return (
    <>
      <img className="image-authentication" src={Image} alt="" />
      <div className="wrapper-authentication">
        <form onSubmit={handleSubmit} method="POST">
          <div className="wrapper-heading">
            <h2>Sign Up</h2>
            <img src={Logo} alt="logo" width="150px"/>
          </div>
            <div className="input-box">
              {/* <label className="required">First Name:</label> */}
              <input
                className="field__input"
                type="text"
                placeholder="Enter Name"
                value={first}
                name="name"
                onChange={handleFirstName}
              />
              {firstNameErrorMessage && <p style={{ color: "red", fontSize: "11px", marginTop:"1px" }}>Name cannot be empty</p>}
            </div>
            <div className="input-box">
              {/* <label className="required">Email Address:</label> */}
              <input
                className="field__input"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
              {emailErrorMessage && <p style={{ color: "red", fontSize: "11px", marginTop:"1px"}}>Enter valid email</p>}
            </div>
            <div className="input-box">
              {/* <label class="required">Password:</label> */}
              <input
                className="field__input"
                type="text"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
              {passwordErrorMessege && <p style={{ color: "red", fontSize: "11px",marginTop:"1px" }}>Password must be 8 characters long</p>}
            </div>
            <div className="input-box">
              {/* <label class="required">Password:</label> */}
              <input
                className="field__input"
                type="text"
                placeholder="Re-Enter Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
              />
              {confirmPasswordErrorMessege && <p style={{ color: "red", fontSize: "11px",marginTop:"1px" }}>Passwords did not match</p>}
            </div>
            <div className="field">
              <label class="required">Role:</label>
              <br />
              <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="role">Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
            <div class="input-box button">
              <input type="Submit" value="Register Now" ></input>
            </div>
            <div class="text">
              <h3>Already have an account? <a href="/login">Login now</a></h3>
              {/* <br /> */}
              <h3><a href="/">Go Home</a></h3>
            </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;