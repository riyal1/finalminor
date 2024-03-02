


import React from 'react';

function ConversationsItem({ name, lastMessage, timestamp }) {
  return (
    <div className="conversation-container">
      <p className="con-icon">{name && name.length > 0 ? name[0] : ''}</p>
      <p className="con-title">{name}</p>
      <p className="con-lastMessage">{lastMessage}</p>
      <p className="con-timestamp">{timestamp}</p>
    </div>
  );
}

export default ConversationsItem;
