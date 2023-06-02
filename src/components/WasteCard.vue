<template>
  <ion-card>
    <ion-card-header class="mb-2">
      <ion-card-subtitle>{{ getMonthName }}</ion-card-subtitle>
      <ion-card-title> {{ `${getDayName} ${getDayNumber}` }} </ion-card-title>
    </ion-card-header>
    <template v-if="wastes && wastes.length">
      <ion-item class="mt-2 pb-3" v-for="w in wastes" :key="w" lines="none">
        <div class="rounded-circle d-flex align-items-center justify-content-center me-4" :style="{ background: getColorIcon(w), height: '4rem', width: '4rem' }">
          <font-awesome-icon size="2x" color="white" :icon="getWasteIcon(w)" />
        </div>
        <div>
          <span class="fw-bold">{{ getWasteName(w) }}</span>
        </div>
      </ion-item>
    </template>
    <ion-card-header v-else>
      <ion-card-title>Nessuna esposizione</ion-card-title>
    </ion-card-header>

  </ion-card>
</template>

<script lang="ts" setup>
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonCardSubtitle } from "@ionic/vue";
import { days, months } from "@/services/constants";
import { computed, defineProps } from "vue";
import {getWasteIcon} from "@/services/utils"
import {getColorIcon, getWasteName} from "@/services/waste-altopascio"

const props = defineProps({
  wastes: {
    type: Array<string>,
    default: () => [],
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

/*********************************************************/
/* COMPUTED */
/*********************************************************/
const getDayName = computed(() => {
  return days[props.date.getDay()];
});
const getDayNumber = computed(() => {
  return props.date.getDate();
});
const getMonthName = computed(() => {
  return months[props.date.getMonth()];
});


</script>

<style scoped>

ion-card {
  box-shadow: none;
  border-radius: 16px;
  border: 1px solid #ddd
}
</style>