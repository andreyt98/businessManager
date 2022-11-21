const Message = ({ type }) => {
  let icon, text;

  if (type === "success") {
    text = "Product Added!";
    icon = "bi bi-check-circle-fill";
  } else if (type ==="error") {
    text = "Please fill all fields";
    icon = "bi bi-x-circle-fill";
  }else{
    text = "No products added yet";
    icon = "bi bi-exclamation-circle-fill";
  }

  return (
    <p className={"messageAlert " + type}>
      <i className={icon}></i>
      {" " + text}
    </p>
  );
};

export default Message;
