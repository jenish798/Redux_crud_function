import React, { useState } from "react";
import { addUser } from "../../reducer/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { string } from "../../utils";
import { FormInput } from "../../components";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };

  const { newuser, names, emails, submit } = string;

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-full border bg-secondary text-white p-5">
        <h3>{newuser}</h3>
        <FormInput
          names="Name"
          emails="Email"
          submit="Submit"
          onNameChange={setName}
          onEmailChange={setEmail}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Create;
