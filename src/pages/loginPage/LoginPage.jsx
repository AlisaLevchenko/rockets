import AuthorizationForm from "../../components/authorizationForm/AuthorizationForm";
import s from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div>
      <h1 className={s.authTitle}>Go to your acc!</h1>
      <AuthorizationForm title="Login" />
    </div>
  );
};

export default LoginPage;
