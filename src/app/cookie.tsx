"use client";

import React, { useState } from "react";

export default function Cookie(): any {
  const [isOK, setIsOK] = useState(false);

  const handleOKButton = () => {
    setIsOK(!isOK);
  };
  return (
    <div className={`cookie_card fade-element ${isOK ? "hidden_cookie" : ""}`}>
      <span className="color-light-6">
        Nous utilisons des cookies sur notre site Web pour nous aider à offrir
        la meilleure expérience de navigation. En poursuivant votre navigation
        sur notre site Internet, vous acceptez l&apos;utilisation de cookies.
      </span>
      <div className="cookies_cta mx-5">
        <a
          href=""
          className="button color-light-6 button--has-arrow text-center"
        >
          Learn More
        </a>

        <button
          className="button button--has-arrow text-center"
          onClick={handleOKButton}
        >
          OK
        </button>
      </div>
    </div>
  );
}
