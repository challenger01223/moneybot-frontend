import { Layout, Flex, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
// import { SignOut } from "@/store/slices/AuthSlice";
import { setIsToggled } from "@/store/slices/AppSlice";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToggled } = useSelector((state) => state.app);

  const handlelogout = () => {
    // dispatch(SignOut());
  };

  return (
    <Header style={{ padding: "0 20px", backgroundColor: "#fff" }}>
      <Flex justify="space-between" align="center" style={{ height: "100%" }}>
        <Flex align="center" gap={20}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            style={{ width: 50 }}
            onClick={() => {
              dispatch(setIsToggled(!isToggled));
            }}
          />
        </Flex>
        <Button
          type="default"
          icon={<HomeOutlined />}
          style={{ fontWeight: "bold" }}
          onClick={() => {}}
        >
          Go To Dashboard
        </Button>
      </Flex>
    </Header>
  );
};

export default AppHeader;
