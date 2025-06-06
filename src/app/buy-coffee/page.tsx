"use client";

import { useEffect, useState } from "react";

export default function BuyCoffee() {
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    document.body.classList.add("buy-coffee-page");
    return () => {
      document.body.classList.remove("buy-coffee-page");
    };
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      setCopySuccess("Failed to copy!");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-transparent sm:bg-gray-50 dark:sm:bg-gray-50 dark:bg-transparent flex items-center justify-center p-6">
      <div className="space-y-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-white-900 dark:text-white-100">
          Bank Transfer
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Card 1 */}
          <div
            className="relative w-80 h-48 rounded-xl shadow-lg p-6 flex flex-col justify-center text-white"
            style={{
              backgroundImage: "url('/card-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-transparent rounded-lg p-4 space-y-2 max-w-xs border-0 text-white">
              <p><span className="font-semibold">BCA</span></p>
              <p><span className="font-semibold">Egi Chandra Pratama</span></p>
              <p className="flex items-center justify-between font-semibold">
                <span>890 - 557 - 5356</span>
                <button
                  onClick={() => copyToClipboard("8905575356")}
                  className="ml-2 flex items-center gap-1 px-3 py-1 bg-transparent-700 bg-opacity-50 rounded text-sm hover:bg-opacity-75 transition"
                  aria-label="Copy account number"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-80 h-48 rounded-xl shadow-lg p-6 flex flex-col justify-center text-white"
            style={{
              backgroundImage: "url('/card-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-transparent rounded-lg p-4 space-y-2 max-w-xs border-0 text-white">
              <p><span className="font-semibold">SEABANK</span></p>
              <p><span className="font-semibold">Egi Chandra Pratama</span></p>
              <p className="flex items-center justify-between font-semibold">
                <span>9012 - 7614 - 1640</span>
                <button
                  onClick={() => copyToClipboard("901276141640")}
                  className="ml-2 flex items-center gap-1 px-3 py-1 bg-transparent-700 bg-opacity-50 rounded text-sm hover:bg-opacity-75 transition"
                  aria-label="Copy account number"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </p>
            </div>
          </div>
        </div>
        {copySuccess && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded shadow-lg">
            {copySuccess}
          </div>
        )}
      </div>
    </div>
  );
}
