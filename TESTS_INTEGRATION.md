## Tests d'Intégration

Les tests d'intégration vérifient que les différents modules de l'application fonctionnent correctement ensemble. Dans cette section, nous allons utiliser [SuperTest](https://github.com/visionmedia/supertest) pour tester les API HTTP de notre application.

### Objectif

Nous allons tester les routes API suivantes :

- **`GET /api/users`** : Retourne la liste complète des utilisateurs.
- **`GET /users/:id`** : Retourne les informations de l'utilisateur correspondant à l'ID fourni.

### Création du Test d'Intégration

Ajoutez un fichier de test `app.test.js` dans le répertoire `tests/integration/` pour les tests d'intégration.

#### Fichier `tests/integration/app.test.js`

```javascript
const request = require('supertest'); // Importer SuperTest
const app = require('../../src/app'); // Importer l'application Express

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
    expect(response.body).toEqual({ message: 'Utilisateur non trouvé' });
  });
});
```

# Lancer les Tests d'Intégration

Exécutez les tests d'intégration avec la commande suivante :

```bash
npm run test:integration
```