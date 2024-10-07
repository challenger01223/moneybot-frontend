import { Flex } from "antd";
import GetStarted from "./components/GetStarted";
import ChatHistory from "./components/ChatHistory";
import InputBox from "./components/InputBox";
import { useSelector } from "react-redux";

const ChatPage = () => {
  const { goal } = useSelector((state) => state.chat);

  return (
    <>
      <Flex
        style={{
          height: "calc(100% - 80px)",
          padding: 20,
          backgroundColor: "#F8F8F8",
        }}
        justify="center"
        align="center"
      >
        {goal ? <ChatHistory /> : <GetStarted />}
      </Flex>
      <InputBox />
    </>
  );
};

export default ChatPage;
