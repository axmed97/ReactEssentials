import { useState } from "react";
import "./App.css";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [topic, setTopic] = useState("");
  function handleClick(selectedBtn) {
    setTopic(selectedBtn);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map(item => <CoreConcepts key={item.title} {...item} />)}
            
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={topic === 'components'} onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={topic === 'jsx'} onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={topic === 'props'} onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={topic === 'state'} onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {!topic && <p>Please select a topic</p>}
          {topic && (
            <div id="tab-content">
              <h3>{EXAMPLES[topic].title}</h3>
              <p>{EXAMPLES[topic].description}</p>
              <pre>
                <code>{EXAMPLES[topic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
