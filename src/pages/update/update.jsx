import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../reducer/UserReducer";
import string from "../../utils/string/commonstring";
import ButtonComp from "../../components/button/button";
import UpdateComponent from "../../components/updatecomp/updatecomp";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUSer = users.filter((f) => f.id == id);
  const { name, email } = existingUSer[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { update } = string;

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-full border bg-secondary text-white p-5">
        <h3>Update User</h3>

        <UpdateComponent
          nameValue={uname}
          emailValue={uemail}
          onNameChange={setName}
          onEmailChange={setEmail}
          onSubmit={handleUpdate}
          updateText={update}
        />
      </div>
    </div>
  );
};

export default Update;
