import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';

const App = () => {
   return (
      <ChatEngine
         height="100vh"
         projectID="3a752f5e-9228-4313-a3e3-3842d6de490e"
         userName="andar"
         userSecret="andar"
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
   )
}

export default App