const request = require('supertest');
const app = require('../../src/app');

describe('Tests d\'intégration pour les routes API de l\'application', () => {
  
  // Test 1 : Vérifier que la route `/api/users` retourne la liste des utilisateurs
  test('GET /api/users doit retourner tous les utilisateurs', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ]);
  });

  // Test 2 : Vérifier que la route `/users/:id` retourne un utilisateur spécifique
  test('GET /users/1 doit retourner l\'utilisateur avec l\'ID 1', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
  });

  // Test 3 : Vérifier que la route `/users/:id` retourne 404 si l'utilisateur n'existe pas
  test('GET /users/3 doit retourner 404 pour un utilisateur non existant', async () => {
    const response = await request(app).get('/users/3');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'USER_NOT_FOUND' });
  });
});
