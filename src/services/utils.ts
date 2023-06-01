import { Wastes } from "./waste-porcari";

export function getWasteName(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: "Multimateriale",
    [Wastes.ORGANIC]: "Organico",
    [Wastes.DIAPERS]: "Pannolini",
    [Wastes.UNDIFFERENTIATED]: "Indifferenziata",
    [Wastes.PAPER]: "Carta",
    [Wastes.GLASS]: "Vetro",
    [Wastes.GREEN]: "Verde",
  }[waste];
}

export function getColorIcon(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: "var(--ion-color-primary)",
    [Wastes.ORGANIC]: "var(--ion-color-warning)",
    [Wastes.DIAPERS]: "var(--ion-color-secondary-tint)",
    [Wastes.UNDIFFERENTIATED]: "var(--ion-color-medium)",
    [Wastes.PAPER]: "var(--ion-color-secondary-tint)",
    [Wastes.GLASS]: "var(--ion-color-light)",
    [Wastes.GREEN]: "green",
  }[waste];
}

export function getWasteIcon(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: "fa-solid fa-bottle-water",
    [Wastes.ORGANIC]: "fa-solid fa-fish",
    [Wastes.DIAPERS]: "fa-solid fa-baby",
    [Wastes.UNDIFFERENTIATED]: "fa-solid fa-biohazard",
    [Wastes.PAPER]: "fa-solid fa-newspaper",
    [Wastes.GLASS]: "fa-solid fa-glasses",
    [Wastes.GREEN]: "fa-solid fa-leaf",
  }[waste];
}
