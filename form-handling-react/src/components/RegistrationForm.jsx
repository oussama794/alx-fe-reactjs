import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Separate validation checks
    if (!username) {
      setErrors("Username is required!");
      return;
    }
    if (!email) {
      setErrors("Email is required!");
      return;
    }
    if (!password) {
      setErrors("Password is required!");
      return;
    }

    setErrors("");
    console.log("Registered User:", { username, email, password });

    // Reset fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-sm mx-auto border rounded-md shadow"
    >
      <h2 className="text-xl font-bold">Controlled Registration Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />

      {errors && <p className="text-red-500 text-sm">{errors}</p>}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      >
        Register
      </button>
    </form>
  );
}
