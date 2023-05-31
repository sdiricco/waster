<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Calendario</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" color="light">
      <div>
        <div class="details-container ion-padding">
          <div class="flex-container">
            <font-awesome-icon class="mr8" color="white" icon="fa-solid fa-location-dot" />
            <ion-card-title color="white">Comune di Porcari, 55016</ion-card-title>
          </div>
          <div class="flex-container">
            <font-awesome-icon class="mr8" color="white" icon="fa-solid fa-truck" />
            <ion-card-title color="light">Prossima raccolta: {{ state.date.toLocaleDateString() }}</ion-card-title>
          </div>
        </div>

        <template v-if="state.wasteList && state.wasteList.length">
          <ion-card>
            <ion-card-header>
              <ion-card-title> {{ `${getDayName} ${getDayNumber} ${getMonthName}` }} </ion-card-title>
            </ion-card-header>
            <ion-item class="item-wrapper" v-for="w in state.wasteList" :key="w" lines="none">
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
              <ion-card-title> Nessuna esposizione</ion-card-title>
            </ion-card-header>
          </ion-card>
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonItem, IonIcon } from "@ionic/vue";
import { getNextDay } from "../services/date";
import { getWaste, getColorIcon, getWasteIcon } from "../services/waste";
import { days, months } from "../services/constants";
import { onMounted, reactive, computed } from "vue";

/*********************************************************/
/* INTERFACES */
/*********************************************************/
interface STATE {
  date: Date;
  wasteList: Array<string>;
}
/*********************************************************/
/* REACTIVE DATA */
/*********************************************************/
let state = reactive<STATE>({
  date: new Date(),
  wasteList: [],
});
/*********************************************************/
/* COMPUTED */
/*********************************************************/
const getDayName = computed(() => {
  return days[state.date.getDay()];
});
const getDayNumber = computed(() => {
  return state.date.getDate();
});
const getMonthName = computed(() => {
  return months[state.date.getMonth()];
});

onMounted(() => {
  state.date = getNextDay();
  state.wasteList = getWaste(state.date);
});
</script>

<style scoped>
.icon-food-wrapper {
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

ion-card {
  box-shadow: none;
  border-radius: 16px;
}

.details-container {
  background-color: var(--ion-color-secondary-tint);
  color: white;

}

.mr16{
  margin-right: 16px;
}

.mr8{
  margin-right: 8px;
}

.flex-container{
  display: flex;
  align-items: center;
}

</style>
