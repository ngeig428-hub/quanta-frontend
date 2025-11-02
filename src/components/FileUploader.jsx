import React, { useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";

export default function FileUploader() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploaded = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...uploaded]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const dropped = Array.from(event.dataTransfer.files);
    setFiles((prev) => [...prev, ...dropped]);
  };

  const handleRemove = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className="border-2 border-dashed border-indigo-400 dark:border-indigo-600 rounded-2xl p-10 flex flex-col items-center justify-center bg-indigo-50/50 dark:bg-indigo-900/20 transition-all hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {/* Upload Icon + Text */}
      <UploadCloud className="w-12 h-12 text-indigo-500 dark:text-indigo-400 mb-3" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
        Upload your study materials
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Drag & drop or click below to upload your notes, PDFs, or slides
      </p>

      <label className="cursor-pointer px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-sm font-medium shadow hover:opacity-90 transition-all">
        Choose Files
        <input
          type="file"
          multiple
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>

      {/* Uploaded Files Preview */}
      {files.length > 0 && (
        <div className="w-full mt-8 space-y-3">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/60 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <p className="text-sm text-gray-700 dark:text-gray-200 truncate max-w-[200px]">
                  {file.name}
                </p>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
