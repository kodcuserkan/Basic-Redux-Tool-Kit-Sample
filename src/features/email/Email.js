import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  emailBody,
  emailCreatedAt,
  emailName,
  emailNo,
  emailRoute,
  emailTitle,
  selectEmail,
  emailSlice,
} from "./emailSlice";



const Email = () => {
  const selector = useSelector(selectEmail);
  const dispatch = useDispatch();

  console.log("email selector", selector);

  const [formState, setFormState] = useState({
    no: "0",
    name: "",
    route: "Inbox",
    title: "",
    body: "",
    createdAt: Date.now(),
  });
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    const { no, name, route, title, body } = formState;
    const validation =
      no !== "0" &&
      ["Outbox", "Inbox"].includes(route.trim()) &&
      name.trim().length > 0 &&
      title.trim().length > 0 &&
      body.trim().length > 0;
    if (validation) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form: ", formState);
    dispatch(emailTitle(formState.title || null))
    dispatch(emailNo(formState.no.toString() || null))
    dispatch(emailName(formState.name || null))
    dispatch(emailRoute(formState.route || null))
    dispatch(emailBody(formState.body || null))
    dispatch(emailCreatedAt(formState.createdAt.toString()  || null))
    setFormState({
      no: "0",
      name: "",
      route: "Inbox",
      title: "",
      body: "",
    });
    // alert("Form saved to redux")
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <h1>Send Email</h1>
      <input
        className="input-form"
        type="number"
        placeholder="Email no"
        id="no"
        onChange={(e) => setFormState({ ...formState, no: e.target.value })}
        value={formState.no}
        min={0}
        required
      />
      <input
        className="input-form"
        type="text"
        placeholder="Name"
        id="full-name"
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        value={formState.name}
        required
      />
      <input
        className="input-form"
        type="text"
        placeholder="Inbox/ Outbox"
        id="route"
        onChange={(e) => setFormState({ ...formState, route: e.target.value })}
        value={formState.route}
        required
      />
      <input
        className="input-form"
        type="text"
        placeholder="Title"
        id="title"
        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
        value={formState.title}
        required
      />
      <input
        className="input-form"
        type="text"
        placeholder="Body"
        id="body"
        onChange={(e) => setFormState({ ...formState, body: e.target.value })}
        value={formState.body}
        required
      />
      <button type="submit" className="send-form" disabled={!buttonActive}>
        Send
      </button>
    </form>
  );
};

export default Email;
