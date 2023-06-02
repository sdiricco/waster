<template>
  <ion-card>
    <ion-card-header class="h-container">
      <ion-card-title class="ion-padding"> {{ props.name }} </ion-card-title>
      <div class="icon-food-wrapper" :style="{ background: props.color }">
        <slot />
      </div>
    </ion-card-header>
    <ion-card-content>
      <ion-card-subtitle>
        <ion-text color="success" class="fw-bold fs-6">Cosa mettere</ion-text>
      </ion-card-subtitle>
      {{ props.description.in }}
      <template v-if="props.description.out">
        <ion-card-subtitle class="mt-2">
          <ion-text color="danger" class="fw-bold fs-6">Cosa non mettere</ion-text>
        </ion-card-subtitle>
        {{ props.description.out }}
      </template>
    </ion-card-content>
  </ion-card>
</template>
<script setup lang="ts">
import { IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from "@ionic/vue";
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  description: {
    type: Object,
    default: () => ({ in: "", out: "" }),
  },
});
</script>

<style scoped>
.h-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
