import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const logoutHandler = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  window.location.reload();
};
const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="900a891f-8311-4779-b6c4-2281677ab1bf"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
      <button type="button" className="footer-btns" onClick={logoutHandler}>
        LogOut
      </button>
    </div>
  );
};

export default App;
