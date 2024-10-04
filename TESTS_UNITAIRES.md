# Création d'un Test Unitaire pour l'Application Node.js avec Jest

Nous allons créer un test unitaire pour notre application en utilisant Jest. 
Ce test permettra de vérifier individuellement les fonctionnalités de notre service `userService.js`, qui contient la logique de récupération des utilisateurs.

# Objectif

Nous voulons tester la fonction `getUserById()` du service utilisateur (`userService.js`). L'idée est de s'assurer que cette fonction retourne l'utilisateur correct pour un ID donné, et retourne `null` si l'utilisateur n'existe pas.

# Création du Test Unitaire

Nous allons créer un fichier de test `userService.test.js` dans le répertoire `tests/unit/`. Ce test va vérifier le bon fonctionnement de `getUserById()`.

```javascript
const { getUserById } = require('../../src/userService');

describe('Tests Unitaires pour le Service Utilisateur', () => {
  
  // Test 1 : Vérifier que `getUserById(1)` retourne l'utilisateur avec l'ID 1
  test('La fonction getUserById(1) doit retourner l\'utilisateur John Doe', () => {
    const user = getUserById(1);
    expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
  });

  // Test 2 : Vérifier que `getUserById(2)` retourne l'utilisateur avec l'ID 2
  test('La fonction getUserById(2) doit retourner l\'utilisateur Jane Doe', () => {
    const user = getUserById(2);
    expect(user).toEqual({ id: 2, name: 'Jane Doe', email: 'jane@example.com' });
  });

  // Test 3 : Vérifier que `getUserById(3)` retourne `null` si l'utilisateur n'existe pas
  test('La fonction getUserById(3) doit retourner `null` pour un utilisateur non existant', () => {
    const user = getUserById(3);
    expect(user).toBeNull();
  });
});
```

# Explication des Tests

- Test 1 : `getUserById(1)` doit retourner l'utilisateur avec l'ID `1`.

La fonction est appelée avec `1` comme argument.
On utilise `expect(user).toEqual(...)` pour vérifier que l'utilisateur retourné correspond à `{ id: 1, name: 'John Doe', email: 'john@example.com' }`.

- Test 2 : `getUserById(2) `doit retourner l'utilisateur avec l'ID `2`.

La vérification est similaire à celle du premier test, mais pour un utilisateur différent.

- Test 3 : `getUserById(3)` doit retourner `null`, car il n'y a pas d'utilisateur avec cet ID.

`expect(user).toBeNull()` est utilisé pour valider que `getUserById(3)` retourne `null`.

# Lancer les Tests Unitaires

Exécute les tests unitaires avec la commande :

```bash
    npm run test:unit
```