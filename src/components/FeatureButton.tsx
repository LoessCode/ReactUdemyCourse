import type {ReactNode} from "react";

interface FeatureButtonProps {
  children?: ReactNode;
  clickHandler?: () => void;
  isActive?: boolean;
}

function FeatureButton({...props}: FeatureButtonProps)
{
  return (
    <>
      <li className="feature-scroll">
        <button className ={"feature-button-" + (props.isActive ? "active" : "inactive")} onClick={props.clickHandler}>
          {props.children}
        </button>
      </li>
    </>
  )
}

export default FeatureButton;