import React from "react";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/";
import AdminPage from "./admin/Dashboard";
import PublishContent from "./admin/publishContent";
import Terms from "./admin/terms";
import Disclaimer from "./admin/disclaimer";
import AdminLogin from "./admin/adminLogin";
import { LoginAdmin } from "./admin/loginAdmin";
import Home from "./pages/Home";
import News from "./pages/News";
import Aboutus from "./pages/AboutUs";
import Learn from "./pages/Learn";
import NewsDetails from "./pages/News/[id]";
import Academy from "./pages/Academy";
import ArticleDetails from "./pages/Academy/Article/[id]";
import VideoDetails from "./pages/Academy/Video/[id]";
import EpisodeDetails from "./pages/Academy/Video/Episode/[id]";
import ProtectedeRoute from "./component/ProtectedRoute";
import ComingSoonPage from "./pages/ComingSoon";
import PrivateRoute from "./admin/PrivateRoute";
import Survey from "./pages/Survey";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route exact path="/loginAdmin" element={<LoginAdmin />} />
        <Route exact path="/learn" element={<Learn />} />

        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/survey" element={<Survey />} />
        <Route exact path="/podcast" element={<ComingSoonPage />} />
        <Route exact path="/tasks" element={<ComingSoonPage />} />
        <Route exact path="/cypotnaire" element={<ComingSoonPage />} />
        <Route exact path="/reward" element={<ComingSoonPage />} />

        <Route exact path="/Community" element={<ComingSoonPage />} />
        <Route exact path="/faqs" element={<ComingSoonPage />} />
        <Route exact path="/help" element={<ComingSoonPage />} />
        <Route exact path="/jobs" element={<ComingSoonPage />} />
        <Route exact path="/blog" element={<ComingSoonPage />} />
        <Route exact path="/server" element={<ComingSoonPage />} />

        <Route exact path="/loginAdmin" element={<LoginAdmin />} />
        <Route exact path="/academy" element={<Academy />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/adminpage" element={<AdminPage />} />
          <Route exact path="/publish" element={<PublishContent />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
        </Route>

        <Route exact element={<ProtectedeRoute />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/news/:id" element={<NewsDetails />} />
          <Route
            exact
            path="/academy/article/:id"
            element={<ArticleDetails />}
          />
          <Route exact path="/academy/video/:id" element={<VideoDetails />} />
          <Route
            exact
            path="/academy/episode/:id"
            element={<EpisodeDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterConfig;
