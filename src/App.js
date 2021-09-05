import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="900a891f-8311-4779-b6c4-2281677ab1bf"
            userName="Akash"
            userSecret="123123"
            renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} />}
        />
    );
}

export default App;