import React from "react";
import { useState } from "react";

const UserName = ({setUsername}) => {
    const [name, setName] = useState('');
    const handleSubmit = () => {
        localStorage.setItem('kridaKshetraUsername', name)
        setUsername(name);
        // return <Navigate to='/' />;
    }
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserName;
