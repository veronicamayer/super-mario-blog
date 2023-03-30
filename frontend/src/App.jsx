import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import EditPage from "./pages/EditPage/EditPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/details/:title" element={<DetailsPage />} />
                    <Route path="/admin" element={<EditPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
