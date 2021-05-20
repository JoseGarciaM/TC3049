import {supabaseClient as supabase} from 'lib/supabase/client';

export default async function MagicLink(req, res) {
  const {email} = req.body;
  const {user, error} = await supabase.auth.signIn({
    email: email,
  });

  if (error) return res.status(401).json({error: error.message});

  return res.status(200).json({user: user});
}
