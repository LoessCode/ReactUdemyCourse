import type {ReactNode} from "react";

interface FeatureButtonProps {
  children?: ReactNode;
  clickHandler?: () => void;
}

function FeatureButton({...props}: FeatureButtonProps)
{
  return (
    <>
      <li className="feature-button">
        <button className = "feature-scroll" onClick={props.clickHandler}>
          {props.children}
        </button>
      </li>
    </>
  )
}

export default FeatureButton;