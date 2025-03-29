import { createRoot } from "react-dom/client";
import { Fragment } from "react";

function Header(){
  return(
<header className="header">
        <img src="./src/assets/react.svg" alt="React logo" className="logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item" > About</li>
            <li className="nav-list-item" >Contact</li>
          </ul>
        </nav>
      </header>
  )
}
function MainContent(){
return(
  <main className="main-content">
        <h1 className="title">Reasons to learn React</h1>
        <ol className="reasons-list">
          <li className="reason-item">It's highly in demand</li>
          <li className="reason-item">Component-based architecture</li>
          <li className="reason-item">Strong community support</li>
        </ol>
      </main>
)
}
function Footer(){
  return(
<footer className="footer"> <small>©{new Date().getFullYear()}All rights reserved</small></footer>
  )
}




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

