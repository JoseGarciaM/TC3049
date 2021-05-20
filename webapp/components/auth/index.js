import {useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

export default function Auth(props) {
  const [authView, setAuthView] = useState(props.authView);
  const [email, setEmail] = useState('');

  function handleAuthViewChange(authView) {
    setAuthView(authView);
  }

  function handleEmailChange(email) {
    setEmail(email);
  }

  return (
    <>
      {authView === 'signin' ? (
        <SignIn
          email={email}
          onEmailChange={handleEmailChange}
          onAuthViewChange={handleAuthViewChange}
        />
      ) : authView === 'signup' ? (
        <SignUp
          email={email}
          onEmailChange={handleEmailChange}
          onAuthViewChange={handleAuthViewChange}
        />
      ) : authView === 'resetpassword' ? (
        <ResetPassword
          email={email}
          onEmailChange={handleEmailChange}
          onAuthViewChange={handleAuthViewChange}
        />
      ) : null}
    </>
  );
}
