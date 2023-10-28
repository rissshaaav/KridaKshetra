import React, { useState } from "react";
import "./JoinWithCode.css";

const JoinWithCode = () => {
  const [roomCode, setRoomCode] = useState("");
  return (
    <div className="joinWithCode">
      <p>Already have a code?</p>
      <input
        type="text"
        placeholder="enter room code to join the room"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <button type="submit">Join</button>
    </div>
  );
};

export default JoinWithCode;
