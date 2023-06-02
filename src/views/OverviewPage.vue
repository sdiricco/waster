<template>
  <ion-page>
    <AppHeader title="Calendario" />
    <AppContent>
      <div>
        <MunicipalityCard municipality="Altopascio" :next-date="state.date" />
        <WasteCard v-if="state.wasteList && state.wasteList.length" :date="state.date" :wastes="state.wasteList" />
        <NoWasteCard v-else />
      </div>
    </AppContent>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage } from "@ionic/vue";
import { getNextDay } from "../services/date";
import * as wastePorcari from "@/services/waste-altopascio";
import { onMounted, reactive } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";
import MunicipalityCard from "@/components/MunicipalityCard.vue";
import WasteCard from "@/components/WasteCard.vue";
import NoWasteCard from "@/components/NoWasteCard.vue";

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
  state.wasteList = wastePorcari.getWaste(state.date);
});
</script>

<style scoped></style>
