import "./App.css";

import { Header, Footer } from "./components";
import { HomePage } from "./pages/HomePage.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { NotFoundPage } from "./pages/404.jsx";

import { Route } from "./components/Route.jsx";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Footer />
    </>
  );
}

export default App;
