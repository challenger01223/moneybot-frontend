import { Flex, Input, Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const InputBox = () => {
  return (
    <Flex
      style={{
        height: 80,
        backgroundColor: "white",
        padding: "20px 20px",
      }}
    >
      <Flex
        style={{
          border: "solid 1px #DFDFDF",
          height: 40,
          width: "100%",
          padding: '0px 5px',
          backgroundColor: "white",
        }}
        align="center"
      >
        <Input
          className="input-box"
          placeholder="Ask anything about finances"
          style={{ border: "none" }}
        />
        <Button icon={<ArrowUpOutlined />} />
      </Flex>
    </Flex>
  );
};

export default InputBox;
