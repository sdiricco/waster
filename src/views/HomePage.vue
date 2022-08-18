<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Prossima esposizione</ion-card-subtitle>
            <ion-card-title>
              Venerdì 19/08
            </ion-card-title>
          </ion-card-header>
        </ion-card>

        <ion-card>
          <ion-item class="item-wrapper">
            <div class="icon-food-wrapper" :style="{background: 'var(--ion-color-warning)'}">
              <font-awesome-icon size="2x" color="black" icon="fa-solid fa-fish" />
            </div>
            <div>
              <ion-text color="dark">
                <b>Organico</b>
              </ion-text>
            </div>
          </ion-item>
        </ion-card>
        <ion-card>
          <ion-item class="item-wrapper">
            <div class="icon-food-wrapper" :style="{background: 'var(--ion-color-secondary)'}">
              <font-awesome-icon size="2x" color="black" icon="fa-solid fa-newspaper" />
            </div>
            <b>Carta</b>
          </ion-item>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue';
</script>

<style scoped>
.icon-food-wrapper {
  border: 2px solid var(--ion-color-dark);
  border-radius: 50%;
  padding: 1rem;
  margin-right: 1rem;
}

.item-wrapper {
  margin: 1rem 0rem;
}


</style>
