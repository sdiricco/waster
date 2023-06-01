<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title>{{ props.title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
