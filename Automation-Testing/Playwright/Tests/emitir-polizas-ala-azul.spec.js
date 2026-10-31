import { test, expect } from '@playwright/test';
import 'dotenv/config';

/**
 * Ejemplo público saneado para portafolio QA.
 *
 * PRIVACIDAD:
 * - Las credenciales del script privado se reemplazaron por ********.
 * - No publicar credenciales, endpoints privados, datos personales ni datos de pago.
 * - El payload original y los selectores específicos se omiten porque contienen
 *   información interna y deben mantenerse únicamente en el entorno autorizado.
 *
 * Este archivo ilustra la estructura del flujo; requiere configuración y adaptación
 * para ejecutarse contra un entorno de QA autorizado.
 */

const CONFIG = {
  credenciales: {
    user: process.env.QA_API_USER || '********', // Credencial de usuario: valor omitido por seguridad.
    pass: process.env.QA_API_PASSWORD || '********', // Credencial de contraseña: valor omitido por seguridad.
  },
  url: process.env.QA_API_URL || '********', // Endpoint privado de QA: omitido por confidencialidad.
  correoPrueba: process.env.QA_PAYMENT_EMAIL || '********', // Correo de prueba omitido.
  timeoutTotalMs: 120_000,
};

const TARJETA_PRUEBA = {
  nombre: '********', // Datos de tarjeta de prueba omitidos por privacidad.
  apellido: '********',
  numero: '********',
  mes: '**',
  anio: '****',
  cvv: '***',
};

function authHeader() {
  return `Basic ${Buffer.from(
    `${CONFIG.credenciales.user}:${CONFIG.credenciales.pass}`
  ).toString('base64')}`;
}

/**
 * El payload real se omite porque contiene datos personales, identificadores
 * internos y reglas de negocio del entorno privado. Sustituir solo con datos
 * ficticios aprobados por el equipo responsable del ambiente de QA.
 */
function construirPayload(folio, correoComprador) {
  return {
    configuration: {
      partnerId: '********', // Identificador interno omitido.
      channel: '********',
      product: 'AlaAzul',
      folioFromPartner: String(folio),
    },
    user: {
      name: '********',
      email: correoComprador,
      phone: '********',
    },
    policy: {
      currency: 'MXN',
      quote: {
        officeId: '********',
        productId: '********',
        status: '********',
      },
      // TODO: completar con la estructura autorizada y anonimizada del payload.
    },
    // TODO: agregar el bloque de emisión únicamente con datos ficticios autorizados.
  };
}

async function solicitarLinkDePago(request, folio) {
  const response = await request.post(CONFIG.url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: authHeader(),
    },
    data: construirPayload(folio, CONFIG.correoPrueba),
  });

  expect(response.ok(), 'La API debe responder correctamente').toBeTruthy();
  const body = await response.json();
  const urlPago = body?.data?.urlRedirect;

  expect(urlPago, 'La respuesta debe contener el enlace de pago').toBeTruthy();
  return urlPago;
}

async function completarPago(page, urlPago) {
  await page.goto(urlPago);

  // Los selectores y pasos concretos de la pasarela se omiten en esta versión
  // pública. Incorporarlos únicamente en un repositorio privado/autorizado.
  // Usar exclusivamente medios de pago de prueba aprobados por el proveedor.

  const textoFinal = await page.locator('body').innerText();
  return textoFinal;
}

function extraerIdentificadorPoliza(texto) {
  const match = texto.match(/\d+-\d+-\d+/);
  return match ? match[0] : null;
}

test('Ala Azul: cotización, pago y confirmación de emisión', async ({ request, page }) => {
  test.setTimeout(CONFIG.timeoutTotalMs);

  test.skip(
    !process.env.QA_API_URL ||
    !process.env.QA_API_USER ||
    !process.env.QA_API_PASSWORD ||
    !process.env.QA_PAYMENT_EMAIL,
    'Configura las variables de entorno autorizadas para QA antes de ejecutar.'
  );

  // Folio de ejemplo no real. En el entorno de QA debe generarse mediante el
  // mecanismo aprobado para evitar colisiones entre ejecuciones.
  const folio = `DEMO-${Date.now()}`;
  const urlPago = await solicitarLinkDePago(request, folio);
  const textoFinal = await completarPago(page, urlPago);
  const identificadorPoliza = extraerIdentificadorPoliza(textoFinal);

  expect(
    identificadorPoliza,
    'La pantalla final debe mostrar el identificador de la póliza'
  ).not.toBeNull();

  // Las capturas reales solo deben guardarse localmente y revisarse para
  // eliminar datos personales o información confidencial antes de publicarlas.
  // await page.screenshot({ path: path.join('evidencias', 'emision-anonimizada.png'), fullPage: true });

  console.log('Se detectó un identificador de emisión en la respuesta final.');
});
