import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailref = useRef();
  const passwordref = useRef();

  const handleStart = () => {
    setEmail(emailref.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordref.current.value);
  };

  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img
            className='logo'
            src='https://i.ibb.co/JQMLJXR/Netflix-Logo-CMYK.png'
            alt=''
          />
          <button className='loginButton'>Sign In</button>
        </div>
      </div>
      <div className='container'>
        <h1> Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email ? (
          <div className='input'>
            <input type='email' placeholder='email address' ref={emailref} />
            <button onClick={handleStart} className='registrationButton'>
              Get Started
            </button>
          </div>
        ) : (
          <form className='input'>
            <input type='password' placeholder='password' ref={passwordref} />
            <button onClick={handleFinish} className='registrationButton'>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
