const { getUserById, getAllUsers } = require('../../src/userService');

describe('Tests Unitaires pour le Service Utilisateur', () => {
  
  // Test 1
  test('La fonction getUserById(1) doit retourner l\'utilisateur John Doe', () => {
    const user = getUserById(1);
    expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
  });

  // Test 2
  test('La fonction getUserById(2) doit retourner l\'utilisateur Jane Doe', () => {
    const user = getUserById(2);
    expect(user).toEqual({ id: 2, name: 'Jane Doe', email: 'jane@example.com' });
  });

  // Test 3
  test('La fonction getUserById(-1) doit retourner `null` pour un utilisateur non existant', () => {
    const user = getUserById(-1);
    expect(user).toBeNull();
  });

  // Test 4 
  test('La fonction getAllUsers() doit retourner la liste complète des utilisateurs', () => {
    const users = getAllUsers();
    expect(users).toEqual([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ]);
  });
});
