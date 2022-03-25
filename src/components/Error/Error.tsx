import React from "react";
import "./Error.scss";

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => (
  <div className="weather-app-error">
    The following error occurred: <strong>{message}</strong>
  </div>
);

export default Error;
