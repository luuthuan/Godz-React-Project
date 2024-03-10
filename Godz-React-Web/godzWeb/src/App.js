import { Fragment } from "react";
import image from "../src/assets/images/2v1.png";

import "swiper/scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SocialPage from "./pages/SocialPage";
import AboutPage from "./pages/About";
import ShopDetailPage from "./pages/ShopDetailPage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0r9n7uee5W9DQf0DUajhl9C--_upuRqA",
  authDomain: "godzshop-5176f.firebaseapp.com",
  projectId: "godzshop-5176f",
  storageBucket: "godzshop-5176f.appspot.com",
  messagingSenderId: "231819816048",
  appId: "1:231819816048:web:ff7a5359596945d16598b5",
  measurementId: "G-TP31B54QQV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const url = "https://65e08910d3db23f7624987f0.mockapi.io/api/v1/";
  return (
    <Fragment>
      <Routes>
        <Route element={<Main image={image}></Main>}>
          <Route
            path="/"
            element={<HomePage url={url}></HomePage>}
          ></Route>
          <Route
            path="/shops"
            element={
              <ShopPage url={url} endPoint={"products_v1"}></ShopPage>
            }
          ></Route>
          <Route path="/socials" element={<SocialPage></SocialPage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route
            path="/shop/:productId"
            element={<ShopDetailPage></ShopDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
