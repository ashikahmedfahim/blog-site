import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import AppBar from "./app/components/AppBar";
import CircularIndeterminate from "./app/components/CircularIndeterminate";
import MyPosts from "./app/pages/MyPosts";
import { autoSignIn } from "./app/redux/actions/AuthActions";
import { useDispatch } from "react-redux";

const Home = lazy(() => import("./app/pages/Home"));
const About = lazy(() => import("./app/pages/About"));
const Posts = lazy(() => import("./app/pages/Posts"));
const SinglePost = lazy(() => import("./app/pages/SinglePost"));
const SignUp = lazy(() => import("./app/pages/SignUp"));
const SignIn = lazy(() => import("./app/pages/SignIn"));
const CreatePost = lazy(() => import("./app/pages/CreatePost"));

const App = () => {
  const dispatch = useDispatch();
  dispatch(autoSignIn());
  return (
    <Router>
      <AppBar />
      <Suspense fallback={<CircularIndeterminate />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
