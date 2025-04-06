import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"; // Import CSS file

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to validate email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to validate password
  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  // Function to check if form is valid
  const isFormValid = () => {
    return isValidEmail(email) && isValidPassword(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isValidEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (!isValidPassword(password)) {
      setError("Password must be at least 6 characters");
      return;
    }

    const endpoint = isLogin ? "http://localhost:5000/login" : "http://localhost:5000/register";
    
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      if (isLogin) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Registration successful! Please log in.");
        setIsLogin(true);
      }
    } else {
      setError(data.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <div className="password-container">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password (min 6 chars)" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span 
            className="toggle-password" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🔒" : "👁️"}
          </span>
        </div>
        <button type="submit" disabled={!isFormValid()}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </button>
      <div>
      <p className="admin-link" onClick={() => navigate("/admin")}>
        Are you an admin?
      </p>
    </div>
    </div>
  );
}

export default Auth;
