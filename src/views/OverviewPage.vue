<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Esposizione giornaliera</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Prossima esposizione</ion-card-subtitle>
            <ion-card-title>
              {{ `${days[day]} ${dayOfMonth} ${months[month]}` }}
            </ion-card-title>
          </ion-card-header>
        </ion-card>

        <template v-if="wasteList && wasteList.length">
          <ion-card v-for="w in wasteList" :key="w">
            <ion-item class="item-wrapper">
              <div class="icon-food-wrapper" :style="{ background: getColorIcon(w) }">
                <font-awesome-icon size="2x" color="black" :icon="getWasteIcon(w)" />
              </div>
              <div>
                <b>{{ w }}</b>
              </div>
            </ion-item>
          </ion-card>
        </template>
        <template v-else>
          <ion-card>
            <ion-card-header>
              <ion-card-title> Nessuna esposizione per domani </ion-card-title>
            </ion-card-header>
          </ion-card>
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
} from "@ionic/vue";
import { getNextDay } from "../services/date";
import { getWaste } from "../services/waste";
import { days, months } from "../services/constants";

// const year = 2022;
// const monthIndex = 8;
// const dayIndex = 16;
// const d = new Date(year, monthIndex, dayIndex)
const d = getNextDay();
console.log(d);

const day = d.getDay();
const month = d.getMonth();
const dayOfMonth = d.getDate();

const wasteList = getWaste(d);

console.log("wasteList", wasteList);

const getWasteIcon = (waste: string) => {
  switch (waste) {
    case "Multimateriale": {
      return "fa-solid fa-bottle-water";
    }
    case "Carta": {
      return "fa-solid fa-newspaper";
    }
    case "Organico": {
      return "fa-solid fa-fish";
    }
    case "Pannolini": {
      return "fa-solid fa-baby";
    }
    case "Indifferenziato": {
      return "fa-solid fa-biohazard";
    }
    case "Vetro": {
      return "fa-solid fa-glasses";
    }
  }
};

const getColorIcon = (waste: string) => {
  switch (waste) {
    case "Multimateriale": {
      return "var(--ion-color-primary)";
    }
    case "Organico": {
      return "var(--ion-color-warning)";
    }
    case "Pannolini": {
      return "var(--ion-color-secondary-tint)";
    }
    case "Indifferenziato": {
      return "var(--ion-color-medium)";
    }
    case "Carta": {
      return "var(--ion-color-secondary-tint)";
    }
    case "Vetro": {
      return "var(--ion-color-dark)";
    }
  }
};
</script>

<style scoped>
.icon-food-wrapper {
  border: 2px solid var(--ion-color-dark);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-wrapper {
  margin: 1rem 0rem;
}
</style>
