import StartPage from './startPage';
import Menu from './menu';
import Footer from './footer';
import styles from './styles.module.css';
import {
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Menu />
        <Routes>
          <Route path="/" element={<StartPage />}>
            {/* <StartPage /> */}
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
