<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="overview" href="/tabs/overview">
          <ion-icon :icon="calendarOutline" />
          <ion-label>Esposizione</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="categories" href="/tabs/categories">
          <ion-icon :icon="layersOutline" />
          <ion-label>Categorie</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon :icon="settings" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
          
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import { 
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet 
} from '@ionic/vue';
import { 
  layersOutline,
  settings,
  calendarOutline
} from 'ionicons/icons';
</script>

<style scoped>
.tab-selected{
  color: var(--ion-color-secondary-tint) !important;
}
</style>
