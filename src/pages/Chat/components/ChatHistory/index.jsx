import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginDrawer } from "@/store/slices/AppSlice";
import ChatBox from "@/components/ChatBox";

const ChatHistory = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  return (
    <div
      style={{
        height: "calc(100vh - 230px)",
        margin: "0px auto",
        maxWidth: 1120,
        width: "100%",
        overflow: "auto",
        padding: 10,
      }}
    >
      {token ? (
        <></>
      ) : (
        <ChatBox
          type="BOT"
          text="I can help you verify the status and provide more details. Let me know once you’ve logged in, and I’ll assist you further!"
          child={
            <Button
              style={{ fontWeight: 600 }}
              onClick={() => {
                dispatch(setIsLoginDrawer(true));
              }}
            >
              Go For Login
            </Button>
          }
        />
      )}
      <ChatBox
        type="USER"
        text="I am Maichael"
      />
      <ChatBox
        type="BOT"
        text="You are faker."
      />
    </div>
  );
};

export default ChatHistory;
