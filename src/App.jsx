import Home from "./components/Home";
import Layout from "./components/Layout";
import Charts from "./components/Charts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/charts" element={<Charts />} />
      </Route>
    </Routes>
  );
}

export default App;
