import React, { createContext, useState, useContext } from "react";

const NotebookContext = createContext();

export const NotebookProvider = ({ children }) => {
  const [notebooks, setNotebooks] = useState([]);
  const [selectedNotebook, setSelectedNotebook] = useState(null);
  const [summaries, setSummaries] = useState([]);

  const addNotebook = (notebook) => setNotebooks([...notebooks, notebook]);
  const addSummary = (summary) => setSummaries([...summaries, summary]);

  return (
    <NotebookContext.Provider
      value={{
        notebooks,
        selectedNotebook,
        setSelectedNotebook,
        addNotebook,
        summaries,
        addSummary,
      }}
    >
      {children}
    </NotebookContext.Provider>
  );
};

export const useNotebook = () => useContext(NotebookContext);
