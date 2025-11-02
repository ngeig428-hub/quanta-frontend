import React, { useState } from "react";

export default function SignInModal({ onClose, setUser }) {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOTP = async () => {
    if (!email.trim()) {
      setMessage("📧 Please enter a valid email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }),
      });
      const data = await res.json();
      if (data.status === "sent") {
        setOtpSent(true);
        setMessage("✅ OTP sent! Check your terminal or inbox.");
      } else {
        setMessage("❌ Failed to send OTP. Try again.");
      }
    } catch {
      setMessage("⚠️ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) {
      setMessage("🔢 Please enter the OTP.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/verify-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, code: otp }),
      });
      const data = await res.json();
      if (data.status === "verified") {
        setUser(data.user);
        onClose();
      } else {
        setMessage("❌ Invalid OTP. Please try again.");
      }
    } catch {
      setMessage("⚠️ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-sm shadow-2xl space-y-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-center">Sign in with Email</h2>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Enter your email to receive a one‑time code.
        </p>

        {/* Email / OTP */}
        {!otpSent ? (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full p-3 rounded-lg border dark:bg-gray-800"
            />
            <button
              onClick={handleSendOTP}
              disabled={loading}
              className={`bg-indigo-600 text-white px-4 py-2 rounded-lg w-full font-medium ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
              }`}
            >
              {loading ? "Sending..." : "Continue"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-3 rounded-lg border dark:bg-gray-800"
            />
            <button
              onClick={handleVerifyOTP}
              disabled={loading}
              className={`bg-green-600 text-white px-4 py-2 rounded-lg w-full font-medium ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
              }`}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </>
        )}

        {/* Status message */}
        {message && (
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            {message}
          </p>
        )}

        {/* Cancel */}
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:underline mt-2 block mx-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
