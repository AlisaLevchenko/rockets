import AuthorizationForm from "../../components/authorizationForm/AuthorizationForm";
import s from "./RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <div>
      <h1 className={s.authTitle}>Let's Sign Up!</h1>
      <AuthorizationForm title="Sign Up" />
    </div>
  );
};

export default RegisterPage;
