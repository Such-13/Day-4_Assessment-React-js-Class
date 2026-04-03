import { useState } from 'react';

function SubmitForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitVal, setSubmitVal] = useState(false);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleChangePass(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(0);
    setSubmitVal(true);
    alert(name);
    alert(password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Enter your name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <label> Enter your password:
          <input type="password" value={password} onChange={handleChangePass} />
        </label>
        <button type="submit">Submit</button>
        <p>Current Value: {name}</p>
      </form>
      {submitVal && <p>Name: {name}, Password: {password}</p>}
    </>
  );
}

export default SubmitForm;