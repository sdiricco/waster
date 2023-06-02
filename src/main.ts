import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router';
import './registerServiceWorker'

/*********************************************
 * BOOTSTRAP
 *********************************************/
import 'bootstrap/dist/css/bootstrap.css'

/*********************************************
 * IONIC
 *********************************************/
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


/*********************************************
 * FONT AWESOME
 *********************************************/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faDrumstickBite, faNewspaper, faFish, faBottleWater, faBaby, faBiohazard, faGlasses, faLeaf, faMap, faLocation, faLocationDot, faTruck, faWineBottle } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faDrumstickBite, faNewspaper, faFish, faTwitter, faBottleWater, faBaby, faBiohazard, faGlasses, faLeaf, faMap, faLocation, faLocationDot, faTruck, faWineBottle)

const pinia = createPinia()


const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(pinia)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});