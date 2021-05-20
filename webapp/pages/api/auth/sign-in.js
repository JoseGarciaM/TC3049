import {supabaseClient as supabase} from 'lib/supabase/client';

export default async function SignIn(req, res) {
  const {email, password} = req.body;
  const {user, error} = await supabase.auth.signIn({
    email: email,
    password: password,
  });

  if (error) return res.status(401).json({error: error.message});

  return res.status(200).json({user: user});
}
