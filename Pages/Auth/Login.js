import "./Login.css";
import { useState } from "react";

function Login() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = { username, email, password };
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          placeholder="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> Login</button>
      </form>
      <hr />
      <h1>Post A Blog</h1>
      <form>
        <label>Title</label>
        <input placeholder="Enter title of blog" />

        <textarea />

        <select>
          <option>Mo</option>
          <option>Peter</option>
          <option>Jules</option>
          <option>Aaron</option>
        </select>
        <input type="file" />

        <button> Post</button>
      </form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
