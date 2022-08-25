import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";


const PageWithName = ({ name }) => (
  <main style={{ padding: "1rem 0" }}>
    <h2>{name}</h2>
  </main>
)

const Layout = ({ children }) => {
  return (
    <div>
      <nav style={{
        borderBottom: "solid 1px",
        padding: "1rem",

      }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/page-a">Page A</Link> |{" "}
        <Link to="/page-b">Page B</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function RootApp() {
  return (
    <BrowserRouter basename="/iframe">
      <Routes>
        <Route path="/" element={<Layout name="Root" />}>
          <Route index element={<PageWithName name="Page Home" />} />
          <Route path="page-a" element={<PageWithName name="Page A" />} />
          <Route path="page-b" element={<PageWithName name="Page b" />} />
        </Route>
        <Route path="404" element={<PageWithName name="404" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootApp;
