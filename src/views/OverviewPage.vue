<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Esposizione giornaliera {{counter.count}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Prossima raccolta</ion-card-subtitle>
            <ion-card-title>
              {{ `${getDayName} ${getDayNumber} ${getMonthName}` }}
            </ion-card-title>
          </ion-card-header>
        </ion-card>

        <template v-if="r.wasteList && r.wasteList.length">
          <ion-card>
            <ion-card-header>
              <ion-card-title> Esporre </ion-card-title>
            </ion-card-header>
            <ion-item class="item-wrapper" v-for="w in r.wasteList" :key="w">
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
import { getWaste, getColorIcon, getWasteIcon } from "../services/waste";
import { days, months } from "../services/constants";
import { useCounterStore } from "@/store/counter";
import { onMounted, reactive, computed } from "vue";
const counter = useCounterStore();

/*********************************************************/
/* INTERFACES */
/*********************************************************/
interface REACTIVE_DATA {
  date: Date,
  wasteList: Array<string>
}
/*********************************************************/
/* REACTIVE DATA */
/*********************************************************/
let r = reactive<REACTIVE_DATA>({
  date: new Date(),
  wasteList: []
});
/*********************************************************/
/* COMPUTED */
/*********************************************************/
const getDayName = computed(() => {
  return days[r.date.getDay()]
})
const getDayNumber = computed(() => {
  return r.date.getDate()
})
const getMonthName = computed(() => {
  return months[r.date.getMonth()]
})

onMounted(()=>{
  r.date = getNextDay()
  r.wasteList = getWaste(r.date)
})

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
