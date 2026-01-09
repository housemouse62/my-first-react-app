import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith",
    age: 100,
  });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  function handleChange(e) {
    const field = e.target.name;
    setPerson((prevPerson) => ({ ...prevPerson, [field]: e.target.value }));
  }

  // function handleChangeLast(e) {
  //   setPerson((prevPerson) => ({ ...prevPerson, [field]: e.target.value }));
  // }

  return (
    <>
      <h1>
        {person.firstName} {""}
        {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <CustomInput
        label="First Name"
        name="firstName"
        value={person.firstName}
        onChange={handleChange}
      />
      <br />
      <CustomInput
        label="Last Name"
        name="lastName"
        value={person.lastName}
        onChange={handleChange}
      />

      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  );
}

function CustomInput({ label, name, value, onChange }) {
  return (
    <label>
      {label}
      <input type="text" name={name} value={value} onChange={onChange} />
    </label>
  );
}

export default Person;
