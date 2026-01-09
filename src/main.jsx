import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import MeetYou from "./MeetYou.jsx";
// import { Ocean, Silence } from "./Ocean.jsx";
// import { Form } from "./form.jsx";
// import App from "./list.jsx";
// import { TodoList } from "./Keys.jsx";
// import { Month } from "./Keys.jsx";
// import ButtonApp from "./Button.jsx";

import Person from "./person.jsx";
// import Profile from "./PropApp.jsx";
// import { CustomInput } from "./person.jsx";
// import { Practice } from "./Practice.jsx";
// import App from "./NextPractice/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MeetYou />
    <Ocean />
    <Silence />
    <Form />
    <App />
    <TodoList />
    <Month />
    <ButtonApp />
    <Profile />*/}
    <Person />
    {/* <CustomInput /> */}
    {/* <App />  */}
  </StrictMode>,
);
