import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { AddUser, UpdateUser } from "./utils/functions";
import { ToastContainer } from "react-toastify";
import { set } from "firebase/database";
import Toastify from "./utils/toatify";

const initialValue = {
  username: "",
  phoneNumber: "",
  gender: "",
};
function App() {
  const [info, setInfo] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      UpdateUser(info);
    } else {
      AddUser(info);
    }
    Toastify("Ekleme başarılı adamım. 😎");
    setInfo(initialValue);
  };

  const EditUser = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts EditUser={EditUser} />
      <ToastContainer />
    </div>
  );
}

export default App;
