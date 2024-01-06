import { useState } from "react";
import jpgLogo from "../assets/logo.jpg";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { urls } from "../routes/routes";
const HomePage = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();

    setRoomId(id);
    toast.success("created a new room");
  };

  const handleJoinRoom = () => {
    if (!roomId || !userName) {
      toast.error("RoomId and userName are required");
      return;
    }

    // redirect
    navigate(urls.EditorPage.getUrl(roomId), {
      state: { userData: { userName: userName } },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") handleJoinRoom();
  };
  return (
    <div className="home-page-wrapper">
      <div className="form-wrapper">
        <img
          src={jpgLogo}
          width="388px"
          height="180px"
          className="home-page-logo"
          alt="code-ed-logo"
        />
        <h4 className="main-label">Paste invitation Room ID</h4>
        <div className="input-group">
          <input
            type="text"
            className="input-box"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="input-box"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button className="btn join-btn" onClick={handleJoinRoom}>
            Join
          </button>

          <span className="create-info">
            If you don&apos;t have an invite then create &nbsp;
            <a href="#" onClick={createNewRoom} className="create-new-btn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        Built with 💛❤️&nbsp;by&nbsp;
        <a href="https://github.com/bharatrav">Bharat</a>
      </footer>
    </div>
  );
};

export default HomePage;
