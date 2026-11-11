// Slaget om Dalgasgade · forbindelse til Firebase Realtime Database.
// Står FIREBASE_CONFIG som null, kører spillet i lokal testtilstand med simulerede kollegaer.
window.FIREBASE_CONFIG = {
  databaseURL: 'https://ucplus-fredagsbar-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ucplus-fredagsbar'
};
// Adressen, som QR-koden på storskærmen peger på.
window.JOIN_URL = 'https://grammgren.dk/fredagsbar/';
