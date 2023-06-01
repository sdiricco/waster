<template>
  <div class="bg-info ion-padding">
    <div class="d-flex align-items-center mb-1">
      <font-awesome-icon class="me-2" color="white" icon="fa-solid fa-location-dot" />
      <ion-card-title color="white">Comune di {{ props.municipality }}</ion-card-title>
    </div>
    <div class="d-flex align-items-center">
      <font-awesome-icon class="me-2" color="white" icon="fa-solid fa-truck" />
      <ion-card-title color="light">Prossima raccolta: {{ `${props.nextDate.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" })}` }}</ion-card-title>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {IonCardTitle} from "@ionic/vue"
import { defineProps } from 'vue';
const props = defineProps({
    nextDate:{
        type: Date,
        default: new Date()
    },
    municipality: {
        type: String,
        default: ""
    }
})
</script>
