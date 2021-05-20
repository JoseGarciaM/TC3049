import {useState} from 'react';

export default function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [magicLink, setMagicLink] = useState(true);

  function handleAuthViewChange(authView) {
    props.onAuthViewChange(authView);
  }

  function handleEmailChange(event) {
    props.onEmailChange(event.target.value);
    setEmail(event.target.value);
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/auth/sign-up', {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const {user} = await res.json();
    if (!user) setMessage('Error al registrar usuario');

    setLoading(false);
  };

  const handleMagicLink = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/auth/magic-link', {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const {user} = await res.json();
    if (!user) setMessage('Check your email for the magic link');

    setLoading(false);
  };

  return (
    <>
      <h1>SignUp</h1>
      <hr/>
      {magicLink === true ? (
        <>
          <form onSubmit={(e) => handleMagicLink(e)}>
            <input
              label="Email address"
              autoComplete="email"
              placeholder="Type in your email address"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Send magic link</button>
          </form>
        </>
      ) : magicLink === false ? (
        <>
          <form onSubmit={(e) => handleSignUp(e)}>
            <input value={props.email} onChange={handleEmailChange} />
            <input
              id="sign-in__password"
              label="Password"
              type="password"
              defaultValue={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign up</button>
          </form>
        </>
      ) : null}
      {loading && <h3>Loading..</h3>}
      {error && <div style={{color: 'red'}}>{error}</div>}
      {message && <div style={{color: 'green'}}>{message}</div>}
      <hr/>
      <button onClick={() => handleAuthViewChange('signin')}>
        Account?
      </button>
    </>
  );
}
