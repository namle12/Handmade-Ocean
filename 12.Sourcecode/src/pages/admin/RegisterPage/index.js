import { memo, useState } from 'react';
import './styte.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTERS } from 'utils/routers';

function RegisterPage() {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Kiểm tra thông tin đầu vào
    if (!name) {
      setError('Name is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (password.length < 6) {
      setError('Password phải lớn hơn 6 số.');
      return;
    }

    // Kiểm tra số điện thoại có 10-15 chữ số
    const isValidPhoneNumber = (phone) => {
      return /^\d{10}$/.test(phone); 
    };
    if (!isValidPhoneNumber(phone)) {
      setError('Phone number phải 10 số.');
      return;
    }

    // Giả lập quá trình đăng ký thành công
    setSuccess('Registration successful!');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="App">
      <h2>Register Form</h2>
      <form className="form_register" onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input
            className="input_register"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            className="input_register"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="input_register"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            className="input_register"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <div className="button_register">
          <button type="submit" className='button'>Register</button>
          {/* viết sau  */}
          <button type="button" className='button' onClick={() => navigate(ROUTERS.ADMIN.LOGIN)}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default memo(RegisterPage);
