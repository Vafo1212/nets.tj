import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"; 
import HomePage from "./Pages/HomePage/HomePage";
import VacanciesPage from "./Pages/VacanciesPage/VacanciesPage";
import VacanciesItemPage from "./Pages/VacanciesItemPage/VacanciesItemPage";
import BusinessPage from "./Pages/BusinessPage/BusinessPage";
import WhoisPage from "./Pages/WhoisPage/WhoisPage";
import SksPage from "./Pages/SksPage/SksPage";
import NewsPage from "./Pages/NewsPage/NewsPage";
import NewsItemPage from "./Pages/NewsItemPage/NewsItemPage";
import RouterPage from "./Pages/RouterPage/RouterPage";
import HostingPage from "./Pages/HostingPage/HostingPage";
import DirectumPage from "./Pages/DirectumPage/DirectumPage";
import VideoPage from "./Pages/VideoPage/VideoPage";
 

 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<VacanciesPage/>} path="/vacancies"/>
        <Route element={<VacanciesItemPage/>} path="/vacanciesItem/:id"/>
        <Route element={<BusinessPage/>} path="/business"/>
        <Route element={<WhoisPage/>} path="/whois"/>
        <Route element={<SksPage/>} path="/system"/>
        <Route element={<NewsPage/>} path="/news"/>
        <Route element={<NewsItemPage/>} path="/newsItem/:id"/>
        <Route element={<RouterPage/>} path="/router"/>
        <Route element={<HostingPage/>} path="/hosting"/>
        <Route element={<DirectumPage/>} path="/directum"/>
        <Route element={<VideoPage/>} path="/video"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
