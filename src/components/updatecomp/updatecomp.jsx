import React from "react";
import ButtonComp from "../../components/button/button";
import { string } from "../../utils";

const UpdateComponent = ({
  nameValue,
  emailValue,
  onNameChange,
  onEmailChange,
  onSubmit,
  updateText,
}) => {
  const { name, text, placeholdername, email, placeholderemail } = string;
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>{name}</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder={placeholdername}
          value={nameValue}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div>
        <label>{email}</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder={placeholderemail}
          value={emailValue}
          onChange={(e) => onEmailChange(e.target.value)}
        />
      </div>
      <br />
      <ButtonComp name={updateText} />
    </form>
  );
};

export default UpdateComponent;
