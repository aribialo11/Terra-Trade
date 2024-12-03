import { NextResponse } from 'next/server';
import { createClient } from '@/app/utils/supabase/server';
import { cookies } from 'next/headers';

// GET request to fetch user data
export async function GET() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session)

  if (!session) {
    return NextResponse.json({ message: 'No estás autenticado' }, { status: 401 });
  }

  const { data: userData, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (error) {
    console.error('Error fetching user info:', error);
    return NextResponse.json(
      { message: 'Error fetching user info', error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(userData);
}

// POST request to update user data
export async function POST(req: Request) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ message: 'No estás autenticado' }, { status: 401 });
  }

  const body = await req.json();
  const { nombre_completo, telefono, edad } = body;

  const { data, error } = await supabase
    .from('usuarios')
    .update({
      nombre_completo,
      telefono,
      edad,
    })
    .eq('id', session.user.id);

  if (error) {
    console.error('Error updating user info:', error);
    return NextResponse.json(
      { message: 'Error updating user info', error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
