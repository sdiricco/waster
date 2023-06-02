<template>
  <ion-page>
    <AppHeader title="Calendario" />
    <AppContent>
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <MunicipalityCard municipality="Altopascio" :next-date="state.date" />
      <WasteCard :date="state.date" :wastes="state.wasteList" />
    </AppContent>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonRefresher, IonRefresherContent } from "@ionic/vue";
import { getNextDay } from "../services/date";
import * as wasteBassanoZoneA from "@/services/waste-altopascio";
import { onMounted, reactive } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";
import MunicipalityCard from "@/components/MunicipalityCard.vue";
import WasteCard from "@/components/WasteCard.vue";

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
const handleRefresh = (event: CustomEvent) => {
  setTimeout(() => {
    // Any calls to load data go here
    state.date = getNextDay();
    state.wasteList = wasteBassanoZoneA.getWaste(state.date);
    event.target.complete();
  }, 1000);
};

onMounted(() => {
  state.date = getNextDay();
  state.wasteList = wasteBassanoZoneA.getWaste(state.date);
});
</script>

<style scoped></style>