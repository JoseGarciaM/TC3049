import {supabaseClient as supabase} from 'lib/supabase/client';

export default async function ResetPassword(req, res) {
  const {email} = req.body;
  const {error} = await supabase.auth.api.resetPasswordForEmail({
    email: email,
  });

  if (error) return res.status(401).json({error: error.message});
}
