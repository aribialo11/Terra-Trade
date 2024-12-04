import { NextResponse } from 'next/server';
import { createClient } from '@/app/utils/supabase/server';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import type { PostgrestSingleResponse } from '@supabase/supabase-js';

interface Propiedad {
  nombre: string;
  direccion: string;
  barrio: string;
  precio: number;
  telefono: string;
  url_de_la_imagen: string;
  metamask_address: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (
      !body.nombre ||
      !body.direccion ||
      !body.barrio ||
      !body.precio ||
      !body.telefono ||
      !body.url_de_la_imagen ||
      !body.metamask_address
    ) {
      return NextResponse.json({ message: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    if (typeof body.precio !== 'number') {
      body.precio = parseInt(body.precio, 10);
    }

    const { data, error }: PostgrestSingleResponse<Propiedad[] | null> = await supabase
      .from('propiedades')
      .insert([body]);

    if (error) {
      console.error('Error de Supabase:', error);
      return NextResponse.json(
        { message: 'Error de Supabase', error: error.message },
        { status: 500 }
      );
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ message: 'No se pudo insertar la propiedad' }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Error inserting data into Supabase:', error);
    return NextResponse.json(
      { message: 'Error inserting data into Supabase', error: error.message },
      { status: 500 }
    );
  }
}
