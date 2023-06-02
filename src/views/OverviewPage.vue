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
import * as waste from "@/services/waste";
import { onMounted, reactive, ref, onBeforeUnmount } from "vue";
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
const handleRefresh = (event: any) => {
  setTimeout(() => {
    // Any calls to load data go here
    updateState()
    event.target.complete();
  }, 1000);
};


function updateState(){
  state.date = getNextDay();
  state.wasteList = waste.getWaste(state.date);
}

function onVisibilityChange(){
  if (document.visibilityState === 'visible') {
    // L'applicazione è tornata in primo piano (visibile)
    console.log('visibility', true)
    updateState()
  } else {
    // L'applicazione è stata ridotta a icona o messa in background (nascosta)
    console.log('visibility', false)
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange',onVisibilityChange)
  updateState()
});

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', onVisibilityChange)
})
</script>

<style scoped></style>