import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Auth() {
  const [step, setStep] = useState("email"); // "email" → "otp"
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const sendOTP = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/send-otp/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ email }),
    });
    const data = await res.json();
    if (data.status === "sent") {
      setStep("otp");
      setStatus("OTP sent ✅");
    } else {
      setStatus(data.message || "Failed to send OTP ❌");
    }
  };

  const verifyOTP = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/verify-otp/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ email, code }),
    });
    const data = await res.json();
    if (data.status === "verified") {
      setUser(data.user);
      navigate("/learn");
    } else {
      setStatus(data.message || "Invalid OTP ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 space-y-6">
      <h1 className="text-3xl font-bold text-center">Sign In</h1>

      {step === "email" && (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={sendOTP}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Send OTP
          </button>
        </>
      )}

      {step === "otp" && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={verifyOTP}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Verify OTP
          </button>
        </>
      )}

      <p className="text-center text-sm text-gray-500">{status}</p>
    </div>
  );
}
