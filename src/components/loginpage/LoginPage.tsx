
import "../../styles/loginpage/loginpage.css"
import {useState} from "react";

interface LoginElementProps
{
  swapLogin: () => void;
}

function LoginElements({swapLogin}: LoginElementProps)
{
  return (
    <>
      <div className={"login-fields"}>
        <input type={"text"} placeholder={"username"}/>
        <input type={"password"} placeholder={"password"}/>
      </div>
      <div className={"login-buttons"}>
        <button onClick={swapLogin}>
          <span>don't have an account</span>
        </button>
        <button>
          <span>login</span>
        </button>
      </div>
    </>
  )
}

function RegisterElements({swapLogin}: LoginElementProps)
{
  return (
    <>
      <div className={"login-fields"}>
        <input type={"email"} placeholder={"email"}/>
        <input type={"text"} placeholder={"username"}/>
        <input type={"password"} placeholder={"password"}/>
        <p>date of birth</p>
        <input type={"date"} placeholder={"date of birth"}/>
      </div>
      <div className={"login-buttons"}>
        <button onClick={swapLogin}>
          <span>proceed to login</span>
        </button>
        <button>
          <span>register</span>
        </button>
      </div>
    </>
  )
}


function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  function swapLogin()
  {
    setIsLogin(()=> (!isLogin));
  }

  return (
    <>
      <div className={"login-box"}>
        {isLogin ? <LoginElements swapLogin={swapLogin} /> : <RegisterElements swapLogin={swapLogin} />}
      </div>
    </>
  )
}

export default LoginPage;