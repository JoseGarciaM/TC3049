import 'styles/main.css';
import {AuthProvider} from 'lib/supabase/auth';

export default function App({Component, pageProps}) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
