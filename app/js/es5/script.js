"use strict";

fetch('./templates.hbs').then(function (templateData) {
  return templateData.text();
}).then(function (templateData) {
  var hbsTemplate = Handlebars.compile(templateData);
  fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc').then(function (returnedData) {
    return returnedData.json();
  }).then(function (returnedData) {
    var html = '';

    for (var i = 0; i < 3; i++) {
      html += hbsTemplate(returnedData.items[i]);
    }

    document.querySelector('main').innerHTML = html;
  });
});