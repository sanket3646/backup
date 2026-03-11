import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">404</h1>

      <p className="text-slate-500 mb-6">Page not found</p>

      <Link to="/" className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Go Home
      </Link>
    </div>
  );
}
