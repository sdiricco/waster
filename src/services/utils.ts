import { Wastes } from "./waste-bassano-zone-A";

export function getWasteName(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: "Multimateriale",
    [Wastes.PLASTIC_AND_METALS]: "Plastica e metalli",
    [Wastes.PLASTIC]: "Plastica",
    [Wastes.PAPER]: "Carta",
    [Wastes.PAPER_AND_CARDBOARD]: "Carta e cartone",
    [Wastes.ORGANIC]: "Organico",
    [Wastes.GREEN]: "Verde",
    [Wastes.DIAPERS]: "Pannolini",
    [Wastes.GLASS]: "Vetro",
    [Wastes.UNDIFFERENTIATED]: "Indifferenziata",
    [Wastes.DRY_RESIDUE]: "Secco residuo",
  }[waste];
}

export function getColorIcon(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: "var(--ion-color-primary)",
    [Wastes.PLASTIC_AND_METALS]: "#00a7df",
    [Wastes.PLASTIC]: "var(--ion-color-primary)",
    [Wastes.PAPER]: "var(--ion-color-secondary-tint)",
    [Wastes.PAPER_AND_CARDBOARD]: "#f9bc00",
    [Wastes.ORGANIC]: "#8b5018",
    [Wastes.GREEN]: "green",
    [Wastes.DIAPERS]: "var(--ion-color-secondary-tint)",
    [Wastes.GLASS]: "#004e88",
    [Wastes.UNDIFFERENTIATED]: "var(--ion-color-medium)",
    [Wastes.DRY_RESIDUE]: "#736f62",
  }[waste];
}

export function getWasteIcon(waste: string) {
  return {
    [Wastes.MULTI_MATERIAL]: "fa-solid fa-bottle-water",
    [Wastes.PLASTIC_AND_METALS]: "fa-solid fa-bottle-water",
    [Wastes.PLASTIC]: "fa-solid fa-bottle-water",
    [Wastes.PAPER]: "fa-solid fa-newspaper",
    [Wastes.PAPER_AND_CARDBOARD]: "fa-solid fa-newspaper",
    [Wastes.ORGANIC]: "fa-solid fa-fish",
    [Wastes.GREEN]: "fa-solid fa-leaf",
    [Wastes.DIAPERS]: "fa-solid fa-baby",
    [Wastes.GLASS]: "fa-solid fa-glasses",
    [Wastes.DRY_RESIDUE]: "fa-solid fa-biohazard",
  }[waste];
}
