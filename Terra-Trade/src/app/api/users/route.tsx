import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await supabase
      .from('Propiedades') 
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
 