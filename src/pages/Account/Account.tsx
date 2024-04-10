import usePageTitle from "../../hooks/usePageTitle";
import c from "./Account.module.scss";

const Account = () => {
  usePageTitle("Booker | Account");
  return (
    <>
      <div className={c.banner}>
        <h1>Account</h1>
      </div>
      <div className={c.account}>
        <div className={c.log_in}>
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username or email adress*" />
            <input type="password" placeholder="Password*" />
            <div className={c.checkbox}>
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
          </form>
          <button>LOGIN</button>
        </div>

        <div className={c.register}>
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Email adress*" />
            <input type="password" placeholder="Password*" />
            <input type="password" placeholder="Repeat Password*" />
          </form>
          <button>REGISTER</button>
        </div>
      </div>
    </>
  );
};

export default Account;
