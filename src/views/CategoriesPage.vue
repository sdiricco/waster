<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Categorie</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="light">
      <ion-card>
        <ion-card-header class="h-container">
          <ion-card-title class="ion-padding"> Multimateriale </ion-card-title>
          <div class="icon-food-wrapper" :style="{ background: 'var(--ion-color-primary)' }">
            <font-awesome-icon size="2x" color="black" icon="fa-solid fa-bottle-water" />
          </div>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>
            <ion-text color="success">Cosa mettere</ion-text>
          </ion-card-subtitle>
          SOLO imballaggi in plastica, in polistirolo, in latta e tetrapack
          <ion-card-subtitle>
            <ion-text color="danger">Cosa non mettere</ion-text>
          </ion-card-subtitle>
          Tutti gli oggetti che non sono imballaggi, oggetti in plastica e plastica compostabile
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header class="h-container">
          <ion-card-title class="ion-padding" > Organico </ion-card-title>
          <div class="icon-food-wrapper" :style="{ background: 'var(--ion-color-warning)' }">
            <font-awesome-icon size="2x" color="black" icon="fa-solid fa-fish" />
          </div>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>
            <ion-text color="success">Cosa mettere</ion-text>
          </ion-card-subtitle>
          Avanzi di cucina, shopper in plastica compostabile, fondi di caffè, filtri di tè
          <ion-card-subtitle>
            <ion-text color="danger">Cosa non mettere</ion-text>
          </ion-card-subtitle>
          Salviette umidificate, mozziconi di sigarette
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header class="h-container">
          <ion-card-title class="ion-padding"> Vetro </ion-card-title>
          <div class="icon-food-wrapper" :style="{ background: 'var(--ion-color-light)' }">
            <font-awesome-icon size="2x" color="black" icon="fa-solid fa-glasses" />
          </div>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>
            <ion-text color="success">Cosa mettere</ion-text>
          </ion-card-subtitle>
          Bottiglie, vasetti, fiaschi, barattoli
          <ion-card-subtitle>
            <ion-text color="danger">Cosa non mettere</ion-text>
          </ion-card-subtitle>
          Ceramica, porcellana, cristallo, lampadine e neon, specchi, lastre di vetro, damigiane, pirofile in pirex, tappi
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header class="h-container">
          <ion-card-title class="ion-padding"> Rifiuto non riciclabile </ion-card-title>
          <div class="icon-food-wrapper" :style="{ background: 'var(--ion-color-medium)' }">
            <font-awesome-icon size="2x" color="black" icon="fa-solid fa-biohazard" />
          </div>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>
            <ion-text color="success">Cosa mettere</ion-text>
          </ion-card-subtitle>
          Mascherine, guanti, giocattoli, mozziconi di sigaretta e tutto ciò che non è differenziabile.
          <ion-card-subtitle>
            <ion-text color="danger">Cosa non mettere</ion-text>
          </ion-card-subtitle>
          Tutti i materiali che per volume, peso o qualità non possono essere inseriti nel sacco grigio, vanno consegnati presso i Centri di Raccolta.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonText,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/vue";
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

.h-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
