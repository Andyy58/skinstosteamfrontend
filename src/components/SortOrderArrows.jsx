import React from "react";

const SortOrderArrows = ({ direction }) => {
  if (direction === "up") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 0 24 30"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 14l5-5 5 5z" />
      </svg>
    );
  } else if (direction === "down") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 0 24 30"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 17l5 5 5-5z" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 0 24 30"
        width="24"
      >
        <path d="M0 0h24v52H0z" fill="none" />
        <path d="M7 14l5-5 5 5z" /> {/* Up arrow */}
        <path d="M7 17l5 5 5-5z" /> {/* Down arrow, shifted down */}
      </svg>
    );
  }
};

export default SortOrderArrows;
