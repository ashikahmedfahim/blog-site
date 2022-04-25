import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import AppBar from "./app/components/AppBar";
import CircularIndeterminate from "./app/components/CircularIndeterminate";

const Home = lazy(() => import("./app/pages/Home"));
const About = lazy(() => import("./app/pages/About"));
const Posts = lazy(() => import("./app/pages/Posts"));
const SignUp = lazy(() => import("./app/pages/SignUp"));
const SignIn = lazy(() => import("./app/pages/SignIn"));
const CreatePost = lazy(() => import("./app/pages/CreatePost"));

const App = () => (
  <Provider store={store}>
    <Router>
      <AppBar />
      <Suspense fallback={<CircularIndeterminate />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Suspense>
    </Router>
  </Provider>
);

export default App;
