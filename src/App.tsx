import {type Dispatch, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./styles/App.css";
import "./styles/FeatureButton.css"

import CardContainer from "./components/CardContainer.tsx";
import FeatureButton from "./components/FeatureButton.tsx";

type featureType =  "Sheets" | "Panes" | "OmniContext" | "Plugins";
const FEATURE_CONTENT: Record<featureType, string> = {
  Sheets:
    "Sheets give you a fast, flexible workspace to organize ideas without fighting rigid structure. Think of them as infinite canvases where content flows naturally, adapts to your workflow, and stays out of your way instead of nagging you with rules.",

  Panes:
    "Panes let you split, stack, and rearrange your workspace so everything you need is visible at once. No more tab hell or context switching — just clean, modular views that bend to how you think, not how some UI designer felt that day.",

  OmniContext:
    "OmniContext keeps track of what you’re working on across files, tools, and sessions, so you don’t have to. It surfaces relevant information exactly when you need it, reducing mental overhead and making your workflow feel weirdly telepathic.",

  Plugins:
    "Plugins extend the core experience without bloating it, letting you add only what you actually use. Whether it’s integrations, automations, or custom tools, plugins snap in cleanly and stay out of the way until you call them."
};



function App()
{
  const [count, setCount] = useState(0);
  const [featureSelectedType, setFeatureSelectedType] = useState<featureType>("Sheets");

  function handleFeatureSelect(type: featureType)
  {
    setFeatureSelectedType(type);
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <CardContainer/>

      <section className="feature-scroll">
        <h2>Feature Scroll</h2>
        <menu>
          <FeatureButton clickHandler={() => handleFeatureSelect("Sheets")}>Sheets</FeatureButton>
          <FeatureButton clickHandler={() => handleFeatureSelect("Panes")}>Panes</FeatureButton>
          <FeatureButton clickHandler={() => handleFeatureSelect("OmniContext")}>OmniContext</FeatureButton>
          <FeatureButton clickHandler={() => handleFeatureSelect("Plugins")}>Plugins</FeatureButton>
        </menu>
        <div>
          <h3>
            {featureSelectedType}
          </h3>
          <p>
            {FEATURE_CONTENT[featureSelectedType]}
          </p>
        </div>
      </section>

    </>
  );
}

export default App;
