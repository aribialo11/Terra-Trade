import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.from("propiedades").select("*");

    if (error) {
      console.error("Error al obtener propiedades de Supabase:", error);
      throw error;
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Error al obtener datos de Supabase:", error);
    return NextResponse.json(
      { message: "Error al obtener propiedades", error: error.message },
      { status: 500 }
    );
  }
}
