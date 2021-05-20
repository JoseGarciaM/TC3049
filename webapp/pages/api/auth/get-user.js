import {supabaseClient as supabase} from 'lib/supabase/client';

export default async function GetUser(req, res) {
  const token = req.headers.token;

  const {data: user, error} = await supabase.auth.api.getUser(token);

  if (error) return res.status(401).json({error: error.message});
  return res.status(200).json(user);
}
