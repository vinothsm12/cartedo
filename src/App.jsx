import AppRoutes from "./routes";
import "./App.css";
import Layout from "./components/layout";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { EnrollmentProvider } from "./context/EnrollmentContext";

function App() {
  return (
    <EnrollmentProvider>
      <Layout
        navbar={<NavBar />}
        sidebar={<Sidebar />}
        className="font-sans antialiased"
      >
        <AppRoutes />
      </Layout>
    </EnrollmentProvider>
  );
}

export default App;
