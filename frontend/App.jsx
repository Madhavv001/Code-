import React, { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';

export default function App() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    // Fetch messages from API
    fetchMessages();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <ChatInterface messages={messages} />
    </div>
  );
}
