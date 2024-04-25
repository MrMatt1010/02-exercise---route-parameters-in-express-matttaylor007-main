import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PropertyPage from "./pages/PropertyPage";
import PropertyListPage from "./pages/PropertyListPage";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/property/:id" element={<PropertyPage />} />
            <Route path="/" element={<PropertyListPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
