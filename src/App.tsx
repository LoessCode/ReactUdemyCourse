import "./styles/landingpage/App.css";

import CardContainer from "./components/landingpage/CardContainer.tsx";
import FeatureScroll from "./components/landingpage/FeatureScroll.tsx";
import CountingDemo from "./components/landingpage/CountingDemo.tsx";

function App()
{



  return (
    <main>
      <CountingDemo />

      <CardContainer/>

      <FeatureScroll/>
    </main>
  );
}

export default App;
