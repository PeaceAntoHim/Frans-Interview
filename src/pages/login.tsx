import '../styles/login.css';
import { useState } from 'react';
import { Auth } from '../core/Autentication';

export default function Login() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredential((prevCredential) => ({
      ...prevCredential,
      [name]: value,
    }));
  };

  const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataAuth = {
      email: credential.email,
      password: credential.password,
    }
    const initAuth = new Auth(dataAuth);
    const res = initAuth.login();
    if (res.status) {
      window.location.href = "/home";
    } else {
      // <Alert message={res.message} />
      // alert(res.message);
  
    }
  };

  
  return (
    <section className='login-container'>
      <h1>Please Login</h1>
      
      <form className='form-wrapper' onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <input type='email' required placeholder='Email Address' name='email' value={credential.email} onChange={handleInputChange} />
          
          <input type='password' required placeholder='Password' name='password' value={credential.password} onChange={handleInputChange} />
        </div>
        <div className='checkbox-wrapper'>
          <input type='checkbox' name='' id='' className='' />
          <label htmlFor=''>Remember me</label>
        </div>
        <button type='submit' >Login</button>
      </form>
    </section>
  );
}