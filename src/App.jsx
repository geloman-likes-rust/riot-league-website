import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Skins from "./components/Skins";
const Champion = lazy(() => import("./pages/champion"));
const Champions = lazy(() => import("./pages/champions"));
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Champions />
            </Suspense>
          }
        />
        <Route
          path="/champions/:champion"
          element={
            <Suspense fallback={<Loading />}>
              <Champion />
            </Suspense>
          }
        />
        <Route
          path="/champions"
          element={
            <Suspense fallback={<Loading />}>
              <Champions />
            </Suspense>
          }
        />
        <Route path="*" element={<Skins />} />
      </Routes>
    </Router>
  );
}

export default App;
