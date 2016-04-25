var fs     = require('fs');
var watson = require('watson-developer-cloud');
var dialog_service = watson.dialog({
  username: '1bc8e893-af2a-45e7-ac2f-527a1039fb4a',
  password: '{KYkLAYMIiG8F',
  version: 'v1'
});

var params = {
  name: 'my-dialog',
  file: fs.createWriteStream('template.xml')
};

dialog_service.createDialog(params, function(err, dialog) {
  if (err)
    console.log(err)
  else
    console.log(dialog);
});