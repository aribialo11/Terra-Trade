import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ncnjbkwnzmbroxedwour.supabase.co' ;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
async function getData() {
    let { data, error } = await supabase
      .from('Propiedades')
      .select('*');
  
    if (error) console.error(error);
    else console.log(data);
  }
  
  getData();