import "./App.css";
import { UserStore } from "./context/UserStore";
import { GlobalStyle } from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/member/Login";
import { SignUp } from "./pages/member/SignUp";
import { LayOut } from "./pages/LayOut";
import { Home } from "./pages/Home";
import { MemberList } from "./pages/member/MemberList";
import { ChatList } from "./pages/chat/ChatList";
import { ChatRoomCreate } from "./pages/chat/ChatRoomCreate";
import { Chatting } from "./pages/chat/Chatting";
import { Movies } from "./pages/Movies";
import { Weather } from "./pages/Weather";
import { ThemeSetting } from "./pages/setting/ThemeSetting";
import { Setting } from "./pages/setting/Setting";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        {/* UserStore 안에 있는, 즉 UserStore의 자식 컴포넌트들은 UserContext에 접근이 가능해진다. 즉 UserContext의 value(color, setColor, name, setName)를 사용할 수 있게 되는 것이다. */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route element={<LayOut />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/MemberList" element={<MemberList />} />
              <Route path="/ChatList" element={<ChatList />} />
              <Route path="/ChatRoomCreate" element={<ChatRoomCreate />} />
              <Route path="/Chatting/:roomId" element={<Chatting />} />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/Weather" element={<Weather />} />
              <Route path="/ThemeSetting" element={<ThemeSetting />} />
              <Route path="/Setting" element={<Setting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserStore>
    </>
  );
}

export default App;
