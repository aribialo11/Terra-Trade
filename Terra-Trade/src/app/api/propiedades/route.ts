  import { NextResponse } from 'next/server';
  import { createClient } from '@/app/utils/supabase/server'
  import { cookies } from 'next/headers'

  export async function POST(req: Request) {
    try {
      const body = await req.json();

      if (!body.nombre || !body.direccion || !body.barrio || !body.precio || !body.url_de_la_imagen) {
        return NextResponse.json({ message: 'Todos los campos son obligatorios' }, { status: 400 });
      }

      const cookieStore = cookies()
      const supabase = createClient(cookieStore)

      if(typeof body.precio !== "number" )
        {
          body.precio = [parseInt(body.precio)]; // Convertir precio en array con el número
        } 
      else {
          body.precio = [body.precio];
        }

      const { data, error } = await supabase
        .from('propiedades')
        .insert(body);

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
