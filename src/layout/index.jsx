import React from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "./Header";
import AppSider from "./Sider";
import LoginDrawer from "@/components/LoginDrawer";
// import { MessageContext } from "@/App";
// import { apis } from "@/apis";
// import { SetAuthUser } from "@/store/slices/AuthSlice";

const { Content } = Layout;

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  //   const messageAPI = React.useContext(MessageContext);
  const { token } = useSelector((state) => state.auth);

  //   const GetAuthUser = async () => {
  //     try {
  //       const response: any = await apis.GetCurrentUser();
  //       if (response.status) {
  //         dispatch(SetAuthUser(response.payload.user));
  //       }
  //     } catch (err: any) {
  //       messageAPI.open({
  //         type: "error",
  //         content: err?.response?.data?.message,
  //       });
  //     }
  //   };

  //   React.useEffect(() => {
  //     if (token) {
  //       GetAuthUser();
  //     }
  //   }, [token]);

  return (
    <Layout
      style={{ minHeight: "100vh", backgroundColor: "#004e42", padding: 20 }}
    >
      <AppSider />
      <Layout>
        <AppHeader />
        <Content>{children}</Content>
      </Layout>
      <LoginDrawer />
    </Layout>
  );
};

export default AppLayout;
