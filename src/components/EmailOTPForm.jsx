import React, { useState } from "react";

export default function EmailOTPForm({ setUser, onClose }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE = "http://127.0.0.1:8000/api"; // ✅ Backend URL

  const showMessage = (msg) => setMessage(msg);

  const handleSendOTP = async () => {
    if (!email.trim()) return showMessage("📧 Please enter your email.");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/send-otp/`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }),
      });

      const data = await res.json();
      if (data.status === "sent") {
        setOtpSent(true);
        showMessage("✅ OTP sent! Check backend console for code.");
      } else {
        showMessage("❌ Failed to send OTP.");
      }
    } catch (error) {
      console.error(error);
      showMessage("⚠️ Network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) return showMessage("🔢 Please enter the OTP.");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/verify-otp/`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, code: otp }),
      });

      const data = await res.json();
      if (data.status === "verified") {
        setUser({
          email: data.user.email,
          name: data.user.name,
          profilePic: data.user.profilePic,
        });
        showMessage("🎉 Verified successfully!");
        onClose();
      } else {
        showMessage("❌ Invalid OTP. Try again.");
      }
    } catch (error) {
      console.error(error);
      showMessage("⚠️ Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-4">
      {!otpSent ? (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 outline-none"
          />
          <button
            onClick={handleSendOTP}
            disabled={loading}
            className={`w-full px-4 py-2 rounded text-white transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-600 outline-none"
          />
          <button
            onClick={handleVerifyOTP}
            disabled={loading}
            className={`w-full px-4 py-2 rounded text-white transition ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}

      {message && (
        <p className="text-sm text-center text-gray-700 dark:text-gray-300 mt-2">
          {message}
        </p>
      )}
    </div>
  );
}
