<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
          <ion-card-header>
            <ion-card-title>
              Versione applicazione: 0.0.4
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            L'applicazione è in fase alpha
          </ion-card-content>
        </ion-card>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue';
</script>
