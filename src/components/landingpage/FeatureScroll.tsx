
import "../../styles/landingpage/FeatureButton.css"
import FeatureButton from "./FeatureButton.tsx";
import {useState} from "react";
import {type featureType, FEATURE_CONTENT} from "../../data/landingpage/FeatureScroll.ts";


function FeatureScroll()
{
  const [featureSelectedType, setFeatureSelectedType] = useState<featureType>("Sheets");

  function handleFeatureSelect(type: featureType)
  {
    setFeatureSelectedType(type);
  }

  return (
    <>
      <section className="feature-scroll">
        <h2>Feature Scroll</h2>
        <nav>
          {(Object.keys(FEATURE_CONTENT) as featureType[]).map(key => (
            <FeatureButton isActive={featureSelectedType === key} clickHandler={() => handleFeatureSelect(key)}>{key}</FeatureButton>
          ))}
        </nav>
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

export default FeatureScroll;