import { Routes, Route } from "react-router-dom";

import Intro from "./sheets/IntroPage";
import KnowMore from "./sheets/KnowMore";

export default function App() {
  return (
    <div className="bg-inherit">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="know-more" element={<KnowMore />} />
      </Routes>
    </div>
  );
}
