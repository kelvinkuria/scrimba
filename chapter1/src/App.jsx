import { createRoot } from "react-dom/client";
import { Fragment } from "react";
 import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";






function TemporarySection() {
  return (
    <Fragment>
    <>
      <Header />
      <MainContent />
      <Footer />
      
    </></Fragment>
  );
}export default TemporarySection

const root = createRoot(document.getElementById("root"));
root.render(<TemporarySection />);


//What is a react component? Javascript function that returns jsx

