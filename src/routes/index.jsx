import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
  
  // Layout
  import AppLayout from "@/layout";
  
  // Pages
  import ChatPage from "@/pages/Chat";
  
  const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout>
                <ChatPage />
              </AppLayout>
            }
          />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;