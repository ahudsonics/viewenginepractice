const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs'); // this engine requires the fs module like we did Saturday
// make sure you change the references of madeline and hypatia to "portal"
app.engine('portal', (filePath, options, callback) => {
  // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>')
      .replace('#url#', options.url);
    return callback(null, rendered);
  });
});
app.set('views', './views');
app.set('view engine', 'portal');
app.get('/', (req, res) => {
  res.render('template', {
    title: 'We the Best',
    message: 'Who!',
    content:
      'We Taking Over, Major Key Alert, Yall know who it is, All I do is win',
  });
});
app.get('/about-me', (req, res) => {
  res.render('template2', {
    title: 'Hey',
    message: 'Rick Ross!',
    content: 'The most underrated Rapper in the game',
    url: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
  });
});
app.get('/another-one', (req, res) => {
  res.render('template', {
    title: 'We The Best',
    message: 'Who!',
    content:
      'We Taking Over, Major Key Alert, Yall know who it is, All I do is win',
  });
});
