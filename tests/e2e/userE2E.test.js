const puppeteer = require('puppeteer');
const app = require('../../src/app');
const http = require('http');

let server;
let browser;
let page;

// Démarrer l'application avant d'exécuter les tests
beforeAll(async () => {
  server = http.createServer(app);
  await server.listen(3001);
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

// Fermer l'app
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
