import { useState } from "react";
import jpgLogo from "../assets/logo.jpg";
import Client from "../components/Client";
import Editor from "../components/Editor";
const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Bharat Rav" },
    { socketId: 2, username: "John Doe" },
  ]);
  return (
    <div className="main-wrap">
      <div className="aside">
        <div className="aside-inner">
          <div className="logo">
            <img
              src={jpgLogo}
              width="388px"
              height="180px"
              className="logo-image"
              alt="code-ed-logo"
            />
          </div>
          <h3>Connected</h3>
          <div className="clients-list">
            {clients.map((client) => {
              return (
                <Client key={client.socketId} username={client.username} />
              );
            })}
          </div>
        </div>
        <button className="btn copy-btn">Copy ROOM ID</button>
        <button className="btn leave-btn">Leave</button>
      </div>
      <div className="editor-wrap">
        <Editor />
      </div>
      ;
    </div>
  );
};

export default EditorPage;
