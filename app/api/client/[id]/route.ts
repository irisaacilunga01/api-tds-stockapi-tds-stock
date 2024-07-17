import { sql } from "@vercel/postgres";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id; // 'a', 'b', or 'c'
  try {
    const { rows, rowCount, command } =
      await sql`SELECT * FROM client WHERE id = ${id};`;
    return Response.json({ rows, rowCount, command });
  } catch (error) {
    return Response.json({
      message: "Une erreur s'est  produite, veuillez patienter",
    });
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id; // 'a', 'b', or 'c'
  try {
    const { rows, rowCount, command } =
      await sql`DELETE FROM client WHERE id = ${id};`;
    return Response.json({ rows, rowCount, command });
  } catch (error) {
    return Response.json({
      message: "Une erreur s'esst  produite, veuillez patienter",
    });
  }
}
export async function PUT(
  request: Request,{ params }: { params: { id: string } }
) {
  try {
    const id = params.id; // 'a', 'b', or 'c'
    const { nom, adresse, telephone } = await request.json();
    await sql`UPDATE Client SET nom = ${nom}, adresse = ${adresse}, telephone = ${telephone} WHERE id = ${id};`;
    return Response.json({ message: "modification effectuer avec succès" });
  } catch (error) {
    return Response.json({ message: "erreur lors de la modification" });
  }
}