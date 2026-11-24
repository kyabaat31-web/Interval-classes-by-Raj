importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCJdG7t8eE_7Tn0oLs3YcPKoM_apoT6VGI",
  authDomain: "interval-classes-by-raj.firebaseapp.com",
  projectId: "interval-classes-by-raj",
  storageBucket: "interval-classes-by-raj.firebasestorage.app",
  messagingSenderId: "325517685440",
  appId: "1:325517685440:web:69c044b1dec523aa207325"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'INTERVAL CLASSES – SMART CAMPUS';
  const options = {
    body: payload.notification?.body || 'New campus update',
    icon: '/icons/icon-192.png'
  };
  self.registration.showNotification(title, options);
});
