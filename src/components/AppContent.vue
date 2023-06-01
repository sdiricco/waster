<template>
  <ion-content :fullscreen="true" color="light">
    <slot />
  </ion-content>
</template>
<script lang="ts" setup>
import { IonContent } from "@ionic/vue";
</script>
