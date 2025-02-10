# Exercice - Authentification

## Exercice : Système d'Authentification de Base avec Expo

### Objectifs

Vous allez créer une application mobile Expo qui permet de :

1. **Simuler une authentification par email/mot de passe :**
    - Implémenter une fonction de connexion (login) qui vérifie si les identifiants sont corrects (pour cet exercice, l'email doit être `test@example.com` et le mot de passe `password`) et renvoie un token simulé.
    - Implémenter une fonction d'inscription (register) qui simule une inscription réussie.
2. **Gérer le stockage du token :**
    - Utiliser **AsyncStorage** pour stocker et récupérer le token d'authentification de manière sécurisée.
3. **Organiser l'état d'authentification avec le Context API :**
    - Créer un contexte (`AuthContext`) qui gère l'état global d'authentification (le token, un indicateur de chargement, et une fonction de déconnexion).
4. **Mettre en place la navigation conditionnelle :**
    - Si l'utilisateur est authentifié (token présent), afficher l'écran principal (HomeScreen) avec un bouton de déconnexion.
    - Sinon, afficher les écrans d'authentification (LoginScreen et RegisterScreen).
5. **Organiser le projet :**
    - Séparer les services (authentification et stockage) dans un dossier `services`.
    - Organiser les écrans dans un dossier `screens`.
    - Créer des stacks de navigation dans un dossier `navigation`.

---

## Structure du Projet

Organisez votre projet avec la structure suivante :