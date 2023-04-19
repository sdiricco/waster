# waster
 door-to-door waste app

# Installation

# Notifiche periodiche

No, il metodo setTimeout non viene eseguito se l'applicazione viene chiusa, in quanto è una funzione JavaScript eseguita dal motore del browser o dell'applicazione in background.

Inoltre, su alcune piattaforme, come iOS, le notifiche periodiche potrebbero non funzionare correttamente se l'applicazione è chiusa. Per ovviare a questo problema, è possibile utilizzare i servizi di background di Capacitor per mantenere l'app in esecuzione in background e continuare a generare notifiche.

Ad esempio, puoi utilizzare il plugin Background Task di Capacitor per eseguire un'attività in background e generare notifiche periodiche.

Ecco un esempio di come puoi utilizzare il plugin Background Task di Capacitor:

```js
import { Plugins } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const { App, BackgroundTask } = Plugins;

// imposta l'ora di invio delle notifiche a una specifica ora del giorno
const notificationTime = new Date();
notificationTime.setHours(20);
notificationTime.setMinutes(0);
notificationTime.setSeconds(0);

// programma un'attività in background per generare notifiche periodiche
const generateNotificationsTask = async () => {
  let i = 0;

  while (true) {
    const notif = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Raccolta differenziata',
          body: 'Ricorda di esporre carta e plastica',
          id: i + 1,
          schedule: { at: notificationTime.setDate(notificationTime.getDate() + 1) },
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: null
        }
      ]
    });

    // aspetta 24 ore prima di programmare la prossima notifica
    await new Promise(resolve => setTimeout(resolve, 24 * 60 * 60 * 1000));

    i++;
  }
};

// esegui un'attività in background quando l'applicazione viene messa in background
App.addListener('appStateChange', async state => {
  if (!state.isActive) {
    // avvia un'attività in background per generare notifiche periodiche
    const taskId = await BackgroundTask.beforeExit(generateNotificationsTask);

    // aspetta che l'attività in background abbia finito di eseguire prima di chiudere l'applicazione
    await new Promise(resolve => setTimeout(resolve, 3000));

    // indica al sistema operativo che l'attività in background è stata completata
    await BackgroundTask.finish({ taskId });
  }
});

```
In questo esempio, abbiamo utilizzato il metodo beforeExit del plugin Background Task di Capacitor per eseguire un'attività in background quando l'applicazione viene messa in background. Abbiamo utilizzato il metodo setTimeout per aspettare 24 ore prima di programmare la prossima notifica. In questo modo, le notifiche verranno inviate all'utente ogni giorno alla stessa ora.

Tieni presente che, come ho detto in precedenza, programmare notifiche periodiche con una frequenza elevata potrebbe avere un impatto sulla batteria e sulle prestazioni del dispositivo, quindi è importante trovare un equilibrio tra il numero di notifiche programmate e le prestazioni del dispositivo. In
