import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessage = () => {
        const keys = Object.keys(messages);
        console.log(keys);
    }

    renderMessage();

    return (
        <div>
            ChatFeed
        </div>
    );
}

export default ChatFeed;