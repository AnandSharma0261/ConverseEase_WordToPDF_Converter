import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa6";
import axios from "axios";

// Define the animations
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convert, setConvert] = useState("");
  const [downloadError, setDownloadError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setConvert("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await axios.post(
        "http://localhost:3000/convertFile",
        formData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      setSelectedFile(null);
      setDownloadError("");
      setConvert("File Converted Successfully");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status == 400) {
        setDownloadError("Error occurred: " + error.response.data.message);
      } else {
        setConvert("");
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />
      
      {/* Animated blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      {/* Main content */}
      <div className="relative z-10">
        <div className="max-w-screen-2xl mx-auto container px-4 md:px-20 py-4 pt-16">
          <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
            <div className="w-full max-w-xl bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 transform transition-all hover:scale-[1.01] my-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 mb-6">
                <h1 className="text-3xl font-bold text-center mb-2">
                  Convert Word to PDF Online
                </h1>
                <p className="text-base text-center opacity-90">
                  Easily convert Word documents to PDF format online, without having
                  to install any software.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <input
                  type="file"
                  accept=".doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="FileInput"
                />
                <label
                  htmlFor="FileInput"
                  className="w-full flex items-center justify-center px-4 py-6 bg-gray-50 text-gray-700 rounded-lg 
                           border-2 border-dashed border-blue-300 cursor-pointer
                           transition-all duration-300 
                           hover:bg-blue-50 hover:border-blue-400
                           active:bg-blue-100"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaFileWord className="text-3xl text-blue-600" />
                    </div>
                    <div className="text-center">
                      <span className="text-xl font-semibold block text-gray-700">
                        {selectedFile ? selectedFile.name : "Choose File"}
                      </span>
                      <span className="text-sm text-gray-500 mt-1 block">
                        Drag and drop or click to select
                      </span>
                    </div>
                  </div>
                </label>

                <button
                  onClick={handleSubmit}
                  disabled={!selectedFile}
                  className="w-full max-w-md text-white text-base font-semibold
                           bg-gradient-to-r from-blue-500 to-blue-600
                           hover:from-blue-600 hover:to-blue-700
                           disabled:from-gray-400 disabled:to-gray-500
                           px-6 py-3 rounded-lg
                           transform transition-all duration-300
                           hover:shadow-lg disabled:hover:shadow-none
                           disabled:cursor-not-allowed
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Convert File
                </button>

                {convert && (
                  <div className="w-full max-w-md bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-center text-sm">
                    {convert}
                  </div>
                )}

                {downloadError && (
                  <div className="w-full max-w-md bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-center text-sm">
                    {downloadError}
                  </div>
                )}

                {/* Additional Features Section */}
                <div className="w-full grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-200">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg text-center">
                    <div className="text-blue-600 font-semibold text-sm">Fast</div>
                    <div className="text-xs text-gray-600">Quick Conversion</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg text-center">
                    <div className="text-purple-600 font-semibold text-sm">Secure</div>
                    <div className="text-xs text-gray-600">100% Private</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg text-center">
                    <div className="text-indigo-600 font-semibold text-sm">Simple</div>
                    <div className="text-xs text-gray-600">Easy to Use</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;