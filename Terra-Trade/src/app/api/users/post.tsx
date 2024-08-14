import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../supabaseClient';

export async function post(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.error('Method Not Allowed', { status: 405 });
  }

  try {
    const { data, error } = await supabase
      .from('Agencias')
      .insert(req.body); // Inserta los datos del cuerpo de la solicitud POST en la tabla 'Agencias'

    if (error) {
      throw error;
    }

    console.log('Data inserted into Supabase:', data);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ message: 'Error al insertar datos en Supabase', error }, { status: 500 });
  }
}

export default post;
