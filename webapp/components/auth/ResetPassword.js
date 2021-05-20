import {useState} from 'react';

export default function ResetPassword(props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function handleAuthViewChange(authView) {
    props.onAuthViewChange(authView);
  }

  function handleEmailChange(event) {
    props.onEmailChange(event.target.value);
    setEmail(event.target.value);
  }

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/auth/reset-password', {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    setLoading(false);
  };

  return (
    <>
      <h1>Reset Password</h1>
      <hr/>
      <>
        <form onSubmit={(e) => handleRecoverPassword(e)}>
          <input value={props.email} onChange={handleEmailChange} />
          <button type="submit">Reset Password</button>
        </form>
      </>
      {loading && <h3>Loading..</h3>}
      {error && <div style={{color: 'red'}}>{error}</div>}
      {message && <div style={{color: 'green'}}>{message}</div>}
      <hr/>
      <button onClick={() => handleAuthViewChange('signup')}>
        No Account?
      </button>
      <button onClick={() => handleAuthViewChange('signin')}>
        Account?
      </button>
    </>
  );
}
