console.log("index.js");

// 
// var client  = mqtt.connect($('#broker-input').val())
// or
var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')
//var client1 = mqtt.connect({ host: 'test.mosquitto.org', port: 8081 })

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')
//


//var boolean = false;

// Connect to client
$('#connect-button').on('click', function () {
  $('#broker-status').val('Connecting...')
  client.on('connect', function () {
    $('#broker-status').val('Connected!!!')
    console.log('Connected to client!!!')


  })

  //Append to subscriber table
  $('#subscriber-button').on('click', function () {
    var subInput = $('#subscriber-input').val();
    $('#subscribeTable').prepend('<tr><td>' + subInput + '</td><td>' + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + '</td>')
    client.subscribe(subInput);
  })

  // Append to publisher table
  $('#publisher-button').on('click', function () {
    var pubInput = $('#publisher-input').val();
    var payload = $('#publisher-payload').val();
    $('#publisherTable').prepend('<tr><td>' + pubInput + '</td><td>' + payload + '</td><td>' + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + '</td>')
    client.publish(pubInput,payload);
  })

})

// Append to Broker table
var pubInput = $('#publisher-input').val();
var payload = $('#publisher-payload').val();
client.on('message', function (pubInput, payload) {
  $('#brokerTable').prepend('<tr><td>' + pubInput + '</td><td>' + payload + '</td><td>' + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + '</td>')
})

// broker status as read only
$('#broker-status').prop('readOnly',true);













