import React from "react";

const Message = ({ backgroundColor, textColor, iconClass, text }) => {
  return (
    <p className={"messageAlert"} style={{ background: backgroundColor, color: textColor }}>
        <i className={`${iconClass}`}></i>
        {" "}
        {text}
    </p>
  );
};

export default Message;
