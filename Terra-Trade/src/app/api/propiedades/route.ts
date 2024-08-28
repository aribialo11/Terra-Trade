import { NextResponse } from 'next/server';
import { supabase } from '../../../../supabaseClient';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validar los datos del body si es necesario
    if (!body.name || !body.address || !body.neighborhood || !body.price || !body.image) {
      return NextResponse.json({ message: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('Propiedades') // Asegúrate de que el nombre de la tabla sea correcto
      .insert(body);

    if (error) {
      throw error;
    }

    console.log('Data inserted into Supabase:', data);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ message: 'Error inserting data into Supabase', error }, { status: 500 });
  }
}
