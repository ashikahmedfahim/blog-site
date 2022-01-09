import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./app/components/ResponsiveAppBar";
import styles from "./App.module.css";
import SwipeableTemporaryDrawer from "./app/components/SwipeableTemporaryDrawer";

const Home = lazy(() => import("./app/pages/Home"));
const About = lazy(() => import("./app/pages/About"));

const App = () => (
  <div className={styles.container}>
    <Router>
      <ResponsiveAppBar />
      <SwipeableTemporaryDrawer />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  </div>
);

export default App;
