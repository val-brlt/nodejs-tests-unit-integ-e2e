// src/userService.js
const usersDB = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
  ];
  
/**
 * Récupère un utilisateur par ID
 * @param {number} userId - L'ID de l'utilisateur
 * @returns {Object|null} - L'utilisateur correspondant ou null s'il n'existe pas
 */
function getUserById(userId) {
  const user = usersDB.find((u) => u.id === userId);
  return user || null;
}

/**
 * Récupère tous les utilisateurs
 * @returns {Array} - Liste de tous les utilisateurs
 */
function getAllUsers() {
  return usersDB;
}
  
module.exports = { getUserById, getAllUsers };