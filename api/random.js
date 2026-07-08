export default async function handler(req, res) {
  const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

  if (!APPS_SCRIPT_URL) {
    return res.status(500).json({
      ok: false,
      message: 'Falta configurar APPS_SCRIPT_URL en Vercel.'
    });
  }

  try {
    const response = await fetch(`${APPS_SCRIPT_URL}?action=random`);
    const data = await response.json();

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Error conectando con la base de datos.'
    });
  }
}