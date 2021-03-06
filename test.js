var keygen = require('./index').x509_keygen;

keygen({ subject: '/CN=subject', location: 'server_rsa', destroy: false, derfile: 'server_rsa.cer' }, function(err, results) {
  if (err) return console.log('keypair generation error: ' + err.message);

  console.log('keypair generated.');
  console.log(results);
});
