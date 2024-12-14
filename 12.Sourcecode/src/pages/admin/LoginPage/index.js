import { memo, useState } from 'react';
import './styte.scss';
import { ROUTERS } from 'utils/routers';
import { useNavigate } from 'react-router-dom';

function LoginAdPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('') ;
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Kiểm tra thông tin đăng nhập
    if (email === 'user@example.com' && password === 'password') {
      // alert('Login successful!');
      navigate(ROUTERS.USER.HOME);
    } else {
      setError('Invalid email or password');

    }
  };

  return (
    <div className="App">
      <h2>Login Form</h2>
      <form className='form_login'  onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input className='input_login'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input className='input_login'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='button_login'>
          <button type="button" onClick={() => navigate(ROUTERS.ADMIN.REGISTER)}>
              Register
          </button>
          <button type="submit">Login</button>
        </div>
      </form> 
    </div>
  );
}

export default memo(LoginAdPage);
