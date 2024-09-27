import clsx from "clsx";
import React from "react";

const Button = ({ icon, children, href, containerClassName }) => {
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    ></a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      Text
    </button>
  );
};

export default Button;
