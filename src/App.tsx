//비쥬얼 페이지
//포폴 리스트 페이지

import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./app/Resume/profile/Profile";
import Home from "./app/index/Home";
import Skills from "./app/Resume/skills/Skills";
import Resume from "./app/Resume/Resume";
import Portfolio from "./app/Portfolio/Portfolio";
import Detail from "./app/Portfolio/Detail/Detail";
import Contact from "./app/contact/Contact";
import PortfolioMain from "./app/Portfolio/PortfolioMain";

//
function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/resume" element={<Resume />}>
        <Route path="/resume" element={<Navigate to="profile" replace />} />
        <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
      </Route>
      <Route path="/Portfolio" element={<Portfolio />}>
        <Route path="" element={<PortfolioMain />} />
        <Route path="/Portfolio/:id" element={<Detail />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
