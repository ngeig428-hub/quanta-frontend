import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  // 🌗 Theme
  const [darkMode, setDarkMode] = useState(false);

  // 👤 User info (combined object)
  const [user, setUser] = useState(null);

  // 🧠 UI and editing states
  const [menuOpen, setMenuOpen] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });
  const [passwordMsg, setPasswordMsg] = useState("");

  // 🗂️ Load saved data
  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode");
    const savedUser = localStorage.getItem("user");

    if (savedDark) setDarkMode(savedDark === "true");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // 💾 Persist user + theme
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  // 🌙 Actions
  const toggleDarkMode = () => setDarkMode((d) => !d);

  const handleUploadProfilePic = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser((prev) => ({ ...prev, profilePic: reader.result }));
      setMenuOpen(false);
    };
    reader.readAsDataURL(file);
  };

  const removeProfilePic = () => {
    setUser((prev) => ({ ...prev, profilePic: null }));
    setMenuOpen(false);
  };

  const saveName = () => {
    if (newName.trim()) {
      setUser((prev) => ({ ...prev, name: newName.trim() }));
      setNewName("");
      setEditingName(false);
    }
  };

  const savePassword = () => {
    setPasswordMsg("");
    const { current, newPass, confirm } = passwordForm;
    if (!current || !newPass || !confirm) {
      setPasswordMsg("Please fill out all fields.");
      return;
    }
    if (newPass.length < 6) {
      setPasswordMsg("New password must be at least 6 characters.");
      return;
    }
    if (newPass !== confirm) {
      setPasswordMsg("New password and confirmation do not match.");
      return;
    }

    // TODO: call backend endpoint for password update here
    setPasswordMsg("Password updated (placeholder).");
    setPasswordForm({ current: "", newPass: "", confirm: "" });
    setChangingPassword(false);
  };

  // 🚪 Sign out
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    // theme
    darkMode,
    toggleDarkMode,

    // user
    user,
    setUser,
    logout,

    // ui
    menuOpen,
    setMenuOpen,
    editingName,
    setEditingName,
    newName,
    setNewName,
    changingPassword,
    setChangingPassword,
    passwordForm,
    setPasswordForm,
    passwordMsg,
    setPasswordMsg,

    // actions
    handleUploadProfilePic,
    removeProfilePic,
    saveName,
    savePassword,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
