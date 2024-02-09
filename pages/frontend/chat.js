import React, { useState } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFriends, addUser } from "@/redux/slices/currentUserSlice";

const usersData = [
  {
    name: "mani",
    id: 1,
  },
  {
    name: "naveen",
    id: 2,
  },
  {
    name: "manikanta pindu",
    id: 3,
  },
];

const Chat = () => {
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.currentUser);
  const [users, setUsers] = useState(usersData);
  const [showUserWindow, setUserWindow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [chatUsers, setChatUsers] = useState([]);
  const [message, setMessage] = useState("")

  const handleNewChat = () => {
    setUserWindow(true);
  };

  const handleUsers = (e) => {
    setCurrentUser(e.target.value);
  };

  const handleChatUser = (e) => {
    const user = e.target.value;
    if (!chatUsers.includes(user)) {
      setChatUsers([...chatUsers, { user: user, messages: [] }]);
    }
  };

  const initiateChat = () => {
    if (currentUser) {
      dispatch(addUser(currentUser));
      dispatch(addFriends(chatUsers));
    }
  };

  const handleMessage = (e) => {
    const message = e.target.value

  }
  return (
    <div>
      <button onClick={handleNewChat}>New Chat +</button>
      {showUserWindow && (
        <div className={styles.users_window}>
          <div>
            <h4>Select Current User</h4>
            <select onChange={handleUsers}>
              {users.map((user) => (
                <option value={user.name}>{user.name}</option>
              ))}
            </select>
          </div>

          <div>
            <h4>Select User to chat</h4>
            <select onChange={handleChatUser}>
              {users.map((user) => (
                <option value={user.name}>{user.name}</option>
              ))}
            </select>
          </div>

          <button onClick={initiateChat}>Done</button>
        </div>
      )}

      {currentUserData?.name && <h2>Username : {currentUserData.name}</h2>}
      <div className={styles.chat_section}>
        <div className={styles.users_section}>
          {!!currentUserData?.friends?.length &&
            currentUserData.friends.map((friend) => <div>{friend.user}</div>)}
        </div>
        <div className={styles.chat_window_section}>
            <div className={styles.messages_box}>
                
            </div>
            <input className={styles.chat_input} type="text" value="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
