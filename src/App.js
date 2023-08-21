import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Main/Main";
import { Footer } from "./layout/Footer/Footer";
import styles from "./App.module.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Order } from "./pages/Order/Order";
import { Detail } from "./pages/Detail/Detail";
import { useEffect } from "react";
import {
  loadAsteroids,
  selectAsteroids,
} from "./features/asteroids/asteroids-slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { data } = useSelector(selectAsteroids);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Object.keys(data).length) dispatch(loadAsteroids());
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/order" element={<Order />} />
          <Route path="/:name" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
