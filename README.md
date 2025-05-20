# 🎉 Caramblagues™

Bienvenue sur **Caramblagues™**, une mini application web inspirée de l’univers Carambar 🍬

Ce projet comporte :
- Une **landing page** interactive avec affichage de blagues aléatoires
- Une **simulation d'API REST** documentée avec Swagger (sans back-end)


## 🔸 Front-end

L’application est une page web dynamique en HTML/CSS/JS pur (sans framework) :

### ✅ Fonctionnalités
- Affichage dynamique d’une blague aléatoire au clic
- Interface colorée et fidèle à l’identité Carambar
- Blagues simulées via un fichier `jokes.js`
- Déployée avec GitHub Pages

### 🔗 Démo en ligne
👉 https://geekcrea.github.io/caramblagues/


## 🔸 API simulée (via Swagger)

Même si aucune base de données ou serveur n’est implémenté, l’API REST est **entièrement documentée** avec Swagger YAML.

### ✨ Endpoints définis :
- `GET /blagues` — Toutes les blagues
- `GET /blagues/:id` — Une blague spécifique
- `GET /blagues/random` — Une blague aléatoire
- `POST /blagues` — Ajouter une nouvelle blague

### 📄 Documentation Swagger :
👉 fichier openapi caramblagues.yaml

À visualiser dans : https://editor.swagger.io


##  Auteur

**Alla Aroustamyan**  
Développeuse front passionnée en route vers le full-stack 🚀