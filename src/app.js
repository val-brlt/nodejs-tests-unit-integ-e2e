// src/app.js
const express = require('express');
const path = require('path');
const { getAllUsers, getUserById } = require('./userService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Route pour récupérer un utilisateur par son ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = getUserById(userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'USER_NOT_FOUND' });
  }
});

// Route pour récupérer tous les utilisateurs
app.get('/api/users', (req, res) => {
  const users = getAllUsers();
  res.status(200).json(users);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

module.exports = app;
