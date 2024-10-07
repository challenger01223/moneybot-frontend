import { Avatar, Flex, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ChatBotImage from "@/assets/img/chat-bot.png";

const ChatBox = ({ type, text, child }) => {
  return (
    <div
      style={{
        padding: 20,
        backgroundColor: type === "BOT" ? "white" : "transparent",
      }}
    >
      <Flex gap={20}>
        {type === "BOT" ? (
          <img
            src={ChatBotImage}
            width={40}
            height={40}
            style={{ borderRadius: 6 }}
          />
        ) : (
          <Avatar size={40} shape="square" icon={<UserOutlined />} />
        )}
        <div>
          <Typography.Text>{text}</Typography.Text>
          {child ? <div style={{ marginTop: 10 }}>{child}</div> : null}
        </div>
      </Flex>
    </div>
  );
};

export default ChatBox;
