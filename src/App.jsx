import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Score from "./pages/Score";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page1" element={<Page1 />} />
          <Route exact path="/score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
