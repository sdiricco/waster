<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Impostazioni</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="light">
      <ion-card>
          <ion-card-header>
            <ion-card-title>
              Versione applicazione: 0.0.9
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

<style scoped>
ion-card{
  box-shadow: none;
  border-radius: 16px;
  border: 1px solid #ddd
}</style>
