import {supabaseClient as supabase} from 'lib/supabase/client';

export default async function SetCookie(req, res) {
  supabase.auth.api.setAuthCookie(req, res);
}
