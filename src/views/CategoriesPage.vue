<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Categorie</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="light">
      <waste-info-details v-for="w in Wastes" :name="getWasteName(w)" :key="w" :description="getWasteDescription(w)">
        <div class="rounded-circle d-flex align-items-center justify-content-center" :style="{ background: getColorIcon(w), height: '4rem', width: '4rem' }">
          <font-awesome-icon size="2x" color="white" :icon="getWasteIcon(w)" />
        </div>
      </waste-info-details>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import WasteInfoDetails from "@/components/WasteInfoDetails.vue";
import {Wastes, getWasteDescription, getWasteName, getColorIcon} from "@/services/waste"
import {getWasteIcon} from "@/services/utils"
</script>

<style scoped>
.icon-food-wrapper {
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.success {
  color: var(--ion-color-success);
}
.danger {
  color: var(--ion-color-danger);
}

ion-card {
  box-shadow: none;
  border-radius: 16px;
  border: 1px solid #ddd
}


</style>
