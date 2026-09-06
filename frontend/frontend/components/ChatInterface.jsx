import React from 'react';

export default function ChatInterface({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg) => (
        <div key={msg.id} className="mb-4 p-3 bg-white rounded-lg shadow">
          <p className="text-gray-800">{msg.content}</p>
          <span className="text-xs text-gray-500">{msg.timestamp}</span>
        </div>
      ))}
    </div>
  );
}
