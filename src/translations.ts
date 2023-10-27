type Languages = ["en", "pt"];
export type Language = Languages[number];

export const translations = {
  languageButtonText: {
    en: "English",
    pt: "Português",
  },
  configureVisitTitle: {
    en: "Configure visit",
    pt: "Configurar visita",
  },
  propertyNameLabel: {
    en: "Property name or description",
    pt: "Nome o descricao propiedade",
  },
  locationLabel: {
    en: "Location or Google Maps link",
    pt: "Ubicação o link Google Maps",
  },
  customerDataLegend: {
    en: "Customer data",
    pt: "Datos cliente",
  },
  nifCheckboxLabel: {
    en: "Has NIF",
    pt: "Tem NIF",
  },
  passportCheckboxLabel: {
    en: "Has passport",
    pt: "Tem copia pasaporte",
  },
  workContractCheckboxLabel: {
    en: "Has employment contract",
    pt: "Tem contrato trebalho",
  },
  manualPriceButtonLabel: {
    en: "Set price",
    pt: "Definir preço",
  },
  priceLabel: {
    en: "Price",
    pt: "Preço",
  },
  customerViewHeader: {
    en: "Customer view",
    pt: "Vista cliente",
  },
  addressHeader: {
    en: "Location",
    pt: "Ubicação",
  },
  viewDateTimeHeader: {
    en: "View date and time",
    pt: "Dia e hora da visita",
  },
  reserveNowButton: {
    en: "Reserve viewing",
    pt: "Reservar visita",
  },
} as const;
