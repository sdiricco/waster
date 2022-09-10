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
              Versione applicazione: v0.0.3
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Waste App è ancora in fase alpha
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
  IonContent
} from '@ionic/vue';
</script>
