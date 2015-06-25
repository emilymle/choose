var wdi_17_names = ["Addison", "Ben", "Christine", "Chloe", "Cris", "Dane", "David H", "David Z", "Emily", "Imtaek", "Jack", "Jesse P", "Jesse Z", "Jonathan", "Pericles", "Peter", "Philippe", "Sergio", "Simon", "Tali", "Tavo", "Trevor"];

var nameLoop = function() {
  for (i = 0; i < wdi_17_names.length; i++) {
  console.log(wdi_17_names[i]);
}};

// nameLoop();

var randomName = function() {
  var arrayPosition = Math.floor((Math.random() * 22));
  console.log(wdi_17_names[arrayPosition]);
};
// randomName();
