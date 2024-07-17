import { sql } from "@vercel/postgres";
export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM client`;
    return Response.json(rows);
  } catch (error) {
    return Response.json({message:"erreur"});
  }
}

export async function POST(request: Request) {
  const { nom, adresse, telephone } = await request.json();
  try {
    await sql`INSERT INTO Client (nom, adresse, telephone) VALUES ('${nom}','${adresse}','${telephone}');`;
    return Response.json({ message: "enregistrer avec succès" });
  } catch (error) {
    return Response.json({ message: "erreur d'enregistrement" });
  }
}
