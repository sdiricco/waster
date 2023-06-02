<template>
  <ion-page>
    <AppHeader title="Calendario" />
    <AppContent>
      <div>
        <MunicipalityCard municipality="Bassano del grappa, zona C" :next-date="state.date" />
        <WasteCard :date="state.date" :wastes="state.wasteList" />
      </div>
    </AppContent>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from "@ionic/vue";
import { getNextDay } from "../services/date";
import * as wasteBassanoZoneA from "@/services/waste-bassano-zone-A";
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

onMounted(() => {
  state.date = getNextDay();
  state.wasteList = wasteBassanoZoneA.getWaste(state.date);  
});
</script>

<style scoped></style>
