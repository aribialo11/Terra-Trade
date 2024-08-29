import { NextResponse } from 'next/server';
import { supabase } from '../../../../supabaseClient';

const supabaseUrl = 'https://ncnjbkwnzmbroxedwour.supabase.co' ;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.nombre || !body.direccion || !body.barrio || !body.precio || !body.url_de_la_imagen) {
      return NextResponse.json({ message: 'Todos los campos son obligatorios' }, { status: 400 });
    }


    const { data, error } = await supabase
      .from('Propiedades') 
      .insert([body]);

    if (error) {
      console.error('Error de Supabase:', error); 
      throw error;
    }

    console.log('Data inserted into Supabase:', data);

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Error inserting data into Supabase:', error);
    return NextResponse.json({ message: 'Error inserting data into Supabase', error: error.message }, { status: 500 });
  }
}
