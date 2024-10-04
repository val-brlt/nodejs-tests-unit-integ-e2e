# Création d'un Test End-to-End (E2E) pour l'Application Node.js avec Puppeteer

Nous allons créer un test E2E pour notre application en utilisant Puppeteer et Jest.  
Ces tests permettent de valider le bon fonctionnement de l'application dans son ensemble en simulant les interactions utilisateur au niveau de l'interface, et en testant les flux complets.

## Objectif

Nous voulons tester le comportement de l'interface utilisateur pour s'assurer qu'elle réagit correctement aux actions réalisées par l'utilisateur, telles que la navigation et l'affichage des informations.

## Création du Test E2E

Nous allons créer un fichier de test `userE2E.test.js` dans le répertoire `tests/e2e/`. Ce test va vérifier le comportement global de l'interface en utilisant Puppeteer pour automatiser le navigateur.

```javascript
const puppeteer = require('puppeteer');
const app = require('../../src/app');
const http = require('http');

let server;
let browser;
let page;

// Démarrer l'application avant d'exécuter les tests
beforeAll(async () => {
  server = http.createServer(app);
  await server.listen(3001); // Lancer le serveur sur le port 3001
  browser = await puppeteer.launch(); // Démarrer le navigateur Puppeteer
  page = await browser.newPage(); // Ouvrir une nouvelle page
});

// Fermer l'application et le navigateur après les tests
afterAll(async () => {
  await browser.close();
  await server.close();
});

describe('Tests E2E pour l\'interface utilisateur', () => {
  
  test('La page d\'accueil doit afficher une liste des utilisateurs', async () => {
    // Naviguer vers la page d'accueil
    await page.goto('http://localhost:3001/');

    // Vérifier que la page contient une liste d'utilisateurs
    const userListItems = await page.$$eval('#user-list li', items => items.map(item => item.textContent));
    expect(userListItems).toContain('John Doe (ID: 1)');
    expect(userListItems).toContain('Jane Doe (ID: 2)');
  });

  test('Le clic sur un utilisateur doit rediriger vers sa page de détails', async () => {
    // Cliquer sur l'utilisateur avec l'ID 1
    await page.click('a[href="/users/1"]');

    // Vérifier que l'URL a bien changé pour inclure l'ID de l'utilisateur
    expect(page.url()).toBe('http://localhost:3001/users/1');
  });

});
```

## Explication des Tests E2E

- **Test 1 : La page d'accueil doit afficher une liste des utilisateurs**
Ce test simule l'ouverture de la page d'accueil de l'application et vérifie que la liste des utilisateurs est affichée correctement. Il utilise la méthode `page.goto()` pour accéder à la page, et `page.$$eval()` pour extraire le texte des éléments de la liste.

On s'attend à ce que la liste contienne les utilisateurs `John Doe (ID: 1)` et `Jane Doe (ID: 2)`.

- **Test 2 : Le clic sur un utilisateur doit rediriger vers sa page de détails**
Ce test simule un clic sur le lien d'un utilisateur de la liste et vérifie que l'URL change correctement pour afficher la page de détails de l'utilisateur.

On utilise `page.click()` pour simuler le clic sur le lien correspondant à `John Doe` et `expect(page.url()).toBe(...)` pour vérifier l'URL.

## Lancer les Tests E2E

Exécute les tests End-to-End avec la commande :

```bash
npm run test:e2e
```