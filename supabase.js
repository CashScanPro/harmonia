import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vbdgumnlpgpiaeckqnum.supabase.co'
const supabaseKey = 'sb_publishable_XhMaZnPLA3-lk8fjzkBalw_4JUaTmV1'

export const supabase = createClient(supabaseUrl, supabaseKey)
