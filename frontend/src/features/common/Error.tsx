import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

type ErrorPageProps = {};

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl text-red-500 mb-4">
        <FaExclamationTriangle />
      </div>
      <h1 className="text-2xl font-bold mb-2">Oops! {error.statusText}</h1>
      <p>Status Code: {error.status}</p>
      <p className="text-gray-600 mb-4">{error.error.message}.</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-accent text-white font-bold py-2 px-4 rounded"
      >
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;
