import { NextResponse } from 'next/server';
import { supabase } from '../../../../supabaseClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validar los datos del body utilizando los nombres de campo correctos
    if (!body.nombre || !body.direccion || !body.barrio || !body.precio || !body.url_de_la_imagen) {
      return NextResponse.json({ message: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('Propiedades') // Asegúrate de que el nombre de la tabla sea correcto
      .insert([body]); // Usa corchetes alrededor del objeto para insertar correctamente

    if (error) {
      console.error('Error de Supabase:', error); // Añade este log
      throw error;
    }

    console.log('Data inserted into Supabase:', data);

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Error inserting data into Supabase:', error);
    return NextResponse.json({ message: 'Error inserting data into Supabase', error: error.message }, { status: 500 });
  }
}
