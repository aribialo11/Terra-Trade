import { createClient } from '@supabase/supabase-js'

// Reemplaza con tu URL y clave API de Supabase
const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseKey = 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

// Ejemplo de consulta: obtener todos los registros de una tabla
async function getData() {
  let { data, error } = await supabase
    .from('your_table')
    .select('*');

  if (error) console.error('Error:', error);
  else console.log('Data:', data);
}

getData();
