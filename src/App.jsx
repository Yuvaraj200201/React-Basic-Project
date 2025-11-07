import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Table from "./components/Table";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    icon: <FaHome />,
    href: "#",
  },
  {
    name: "About",
    icon: <FaInfoCircle />,
    href: "#",
  },
  {
    name: "Services",
    icon: <FaServicestack />,
    href: "#",
  },
  {
    name: "Contact",
    icon: <FaEnvelope />,
    href: "#",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} handleToggle={handleToggle} navLinks={navLinks}/>
      <div className="flex">
        <Sidebar isOpen={isOpen} handleToggle={handleToggle} navLinks={navLinks} />
        <div className="w-full">
          <Header />
          <Hero />
          <div className="flex flex-col md:flex-row mx-auto md:p-6">
            <main className="flex-1">
              <Article />
              <Table />
            </main>
            <Aside />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
