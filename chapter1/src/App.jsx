import { createRoot } from "react-dom/client";

function TemporarySection() {
  return (
    <>
      <header>
        <img src="./src/assets/react.svg" alt="React logo" width="40px" />
      </header>
      <main>
        <h1>Reasons to learn React</h1>
        <ol>
          <li>It's highly in demand</li>
          <li>Component-based architecture</li>
          <li>Strong community support</li>
        </ol>
      </main>
      <footer> <small>All rights reserved</small></footer>
    </>
  );
}export default TemporarySection

const root = createRoot(document.getElementById("root"));
root.render(<TemporarySection />);