import { useState } from "react";
import axios from "axios";

export default function SignUpForm({ onCreated }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register/", {
        email,
        name,
      });
      if (res.data.status === "created") {
        setStatus("Account created ✅");
        onCreated(email);
      } else {
        setStatus("Failed to create account ❌");
      }
    } catch {
      setStatus("Error creating account ❌");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleSignUp}>Create Account</button>
      <p>{status}</p>
    </div>
  );
}
