import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../supabaseClient'; // Asegúrate de que la ruta es correcta

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await supabase
      .from('Propiedades') // Cambia 'Properties' al nombre real de tu tabla si es necesario
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

export default POST;
 