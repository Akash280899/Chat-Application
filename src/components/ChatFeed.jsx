import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMymessage) => {
        chat.people.map((person, index) => person.last_read === message.id && 
            (<div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMymessage ? 'right' : 'left',
                    backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
                }}
            >
            </div>
            ));
    }

    const renderMessage = () => {
        const keys = Object.keys(messages);
        
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMymessage = userName === message.sender.username;
             
            return(
                <div key={`msg_${index}`} style = {{width: '100%' }}>
                    <div className="message-block">
                        {
                            isMymessage ? 
                            <MyMessage message={message} /> : 
                            <OthersMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight : isMymessage ? '18px' : '0px' , marginLeft : isMymessage ? '0px' : '68px'}}>
                        {renderReadReceipts(message, isMymessage)}
                    </div>
                </div>
            )
        })
    }

    if(!chat) return <div />;

    return (
            <div className="chat-feed">
                <div className="chat-title-container">
                    <div className="chat-title">
                        {chat?.title}
                    </div>
                    <div className="chat-subtitle">
                        {chat.people.map((person) => ` ${person.person.username}`)}
                    </div>
                </div>
                {renderMessage()}
                <div style={{height: '100px'}} />
                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat} />
                </div>
            </div>
    );
}

export default ChatFeed;