export type Property = {
  nombre: string;
  ubicacion: { municipio: string; departamento: string; pais: string };
  areaHectareas: number;
  areaM2: number;
  frenteMetros: number;
  viaFrente: string;
  clasificacionSuelo: string[];
  potencial: string[];
  usosPotenciales: string[];
  ventajas: string[];
  distancias: { destino: string; minutos: number }[];
  viaPrincipal: string;
  ubicacionRelativa: string;
  gps: { lat: number; lng: number };
  contacto: { telefono: string; email: string; whatsapp: string };
};

export const property: Property = {
  nombre: "Terreno Estratégico Galapa",
  ubicacion: {
    municipio: "Galapa",
    departamento: "Atlántico",
    pais: "Colombia",
  },
  areaHectareas: 24,
  areaM2: 240_000,
  frenteMetros: 200,
  viaFrente: "Circunvalar de la Prosperidad",
  clasificacionSuelo: ["Expansión urbana", "Rural", "Industrial"],
  potencial: ["Industrial", "Logístico", "Agropecuario"],
  usosPotenciales: ["Parques logísticos", "Bodegas industriales", "Desarrollo mixto"],
  ventajas: [
    "200 metros de frente sobre la Circunvalar de la Prosperidad",
    "Clasificación de suelo para uso industrial",
    "Zona de expansión urbana e industrial del Atlántico",
    "Corredor estratégico para logística e industria",
    "Documentación legal disponible para revisión",
  ],
  distancias: [
    { destino: "Barranquilla", minutos: 12 },
    { destino: "Centro de Galapa", minutos: 5 },
  ],
  viaPrincipal: "Circunvalar de la Prosperidad",
  ubicacionRelativa: "Antes del peaje",
  gps: { lat: 10.89628, lng: -74.8603 },
  contacto: {
    telefono: "+57 320 219 5172",
    email: "info@terrenogalapa.com",
    whatsapp: "+57 320 219 5172",
  },
};
