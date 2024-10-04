# nodejs-tests-unit-integ-e2e# Node.js Testing Challenge: TU/TI/e2e

## Description

Ce projet a été créé dans le cadre d'une vieille sur les tests unitaires, d'intégration, et End-to-End en utilisant un projet Node.js. 
L'objectif est de démontrer l'utilisation de différentes technologies de test sur un même projet.

## Technologies Utilisées

### Backend
- **Node.js** : Version 20.17.0
- **Express.js** : Version 4.x

### Outils de Test
- **Tests Unitaires** : Jest
- **Tests d'Intégration** : SuperTest
- **Tests End-to-End** : Jest + Puppeteer



## Objectifs

1. **Tester les fonctionnalités indépendantes du projet** (Tests Unitaires) :
   - Utiliser Jest pour tester les fonctions et les méthodes des modules séparément.
2. **Tester l'intégration des différents modules du projet** (Tests d'Intégration) :
   - Utiliser SuperTest pour vérifier les points d'entrée HTTP du projet.
3. **Tester le comportement de l'application du point de vue de l'utilisateur** (Tests End-to-End) :
   - Utiliser Puppeteer avec Jest pour simuler des interactions utilisateurs et valider le bon fonctionnement global.

## Installation

1. **Cloner le projet :**

```bash
   git clone <lien-du-repo>
   cd nom-du-repo
```

2. **Installer les dépendances :**
3. 
4. **Express** : Le framework web utilisé pour créer l'application.
5. **Jest** : Le framework de test unitaire.
6. **SuperTest** : La bibliothèque utilisée pour tester les API HTTP.
7. **Puppeteer** : Une bibliothèque permettant de contrôler un navigateur Chrome ou Chromium pour les tests E2E.

```bash
   npm install
   npm install express
   npm install --save-dev jest supertest puppeteer
```

## Ajout des Scripts au `package.json`

Après avoir installé les dépendances, ajoutez les scripts suivants à votre fichier package.json pour faciliter l'exécution des tests :

```json
"scripts": {
  "test:unit": "jest tests/unit",       
  "test:integration": "jest tests/integration",
  "test:e2e": "jest tests/e2e"
}
```

## Lancement des tests 

1. **Tests Unitaires (Jest) :**

```bash
npm run test:unit
```
2. **Tests d'Intégration (SuperTest) :**

```bash
npm run test:integration
```
3. **Tests End-to-End (Jest + Puppeteer) :**

```bash
npm run test:e2e
```

## Rapports de Tests et Couverture

Les rapports de tests et la couverture de code sont générés automatiquement après l'exécution des tests.

- **Rapport de Tests** : Un fichier test-report.html sera disponible dans le répertoire reports.
- **Couverture de Code** : Un répertoire coverage sera créé, incluant un rapport complet de la couverture de code.

## Structure du Projet

.
├── src/                    # Code source de l'application
├── tests/                  # Répertoires des tests
│   ├── unit/               # Tests unitaires
│   ├── integration/        # Tests d'intégration
│   └── e2e/                # Tests End-to-End
├── .env.example            # Exemple de fichier d'environnement
├── package.json            # Fichier de configuration npm
├── README.md               # Documentation du projet
└── reports/                # Rapports de tests générés automatiquement


## Rappel sur les types de Tests

### Tests Unitaires

Les tests unitaires permettent de tester les plus petites unités fonctionnelles de l'application (comme les fonctions, méthodes ou classes) de manière isolée. L'objectif est de vérifier que chaque module fonctionne correctement de façon indépendante, sans interaction avec d'autres composants. Ces tests sont rapides à exécuter et aident à détecter rapidement des erreurs lors de l'ajout ou de la modification du code.

### Tests d'Intégration

Les tests d'intégration valident le bon fonctionnement de plusieurs modules qui interagissent ensemble. Ils permettent de vérifier que les composants interagissent correctement, comme les appels à une API, la communication entre différents services, ou les accès à la base de données. L'objectif est de détecter les erreurs qui pourraient se produire à l'interface entre les modules.

### Tests End-to-End (E2E)

Les tests End-to-End simulent le comportement de l'utilisateur final en testant l'application dans son ensemble, du début à la fin. Ils vérifient que toutes les parties de l'application fonctionnent ensemble correctement. Par exemple, un test E2E pourrait simuler un utilisateur qui navigue sur une page web, remplit un formulaire et soumet une demande. Ce type de test est utile pour détecter les problèmes globaux de l'application mais peut être plus lent à exécuter.