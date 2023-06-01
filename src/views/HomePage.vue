<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button v-for="t in tabs" :tab="t.value" :key="t.value" :href="t.href">
          <ion-icon :icon="t.icon" />
          <ion-label>{{ t.label }}</ion-label>
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


const tabs = [
  {
    value: 'overview',
    label: 'Overview',
    href: '/home/overview',
    icon: calendarOutline
  },
  {
    value: 'categories',
    label: 'Categorie',
    href: '/home/categories',
    icon: layersOutline
  },
  {
    value: 'settings',
    label: 'Settings',
    href: '/home/settings',
    icon: settings
  },
]

</script>

<style scoped>
.tab-selected{
  color: var(--ion-color-secondary-tint) !important;
}
</style>
