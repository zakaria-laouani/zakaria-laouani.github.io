# Portfolio de Zakaria Laouani

Portfolio statique prêt pour GitHub Pages : HTML, CSS et JavaScript, sans installation ni compilation.

## Voir le site sur votre ordinateur

Décompresser entièrement l'archive, puis ouvrir `index.html` dans Firefox, Chrome ou Edge. Garder le dossier `assets` à côté de ce fichier.

## Publier sur GitHub Pages

1. Créer un dépôt public nommé `zakaria-laouani.github.io`.
2. Dans le dépôt, choisir **Add file > Upload files**.
3. Glisser le CONTENU du dossier décompressé : `index.html`, `styles.css`, `script.js`, `README.md`, le dossier `assets` et le fichier `.nojekyll` si visible. Ne pas envoyer le ZIP lui-même et ne pas ajouter un dossier parent autour du site.
4. Valider avec **Commit changes**.
5. Ouvrir **Settings > Pages**. Dans **Build and deployment**, choisir **Deploy from a branch**, puis la branche **main** et le dossier **/ (root)**. Cliquer sur **Save**.
6. Attendre la publication, puis utiliser le bouton **Visit site** dans les paramètres Pages.

Le site sera disponible à l'adresse https://zakaria-laouani.github.io/ . La publication peut prendre jusqu'à dix minutes.

Un dépôt nommé autrement, par exemple `portfolio`, fonctionne aussi ; l'adresse sera alors https://zakaria-laouani.github.io/portfolio/ . Les chemins relatifs du site prennent en charge les deux cas.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Profil LinkedIn

Le bouton LinkedIn est configuré : https://www.linkedin.com/in/zakaria-laouani-aa63ab289/

Pour le modifier, changer `LINKEDIN_URL` dans `script.js`.

## Modifier le portfolio

| Fichier | Contenu |
| --- | --- |
| index.html | Texte, projets, expériences, coordonnées et lecteur vidéo |
| styles.css | Couleurs, typographie et adaptation mobile |
| script.js | Filtrage des projets, agrandissement des images et lien LinkedIn |
| assets/ | Photo, visuels de la présentation, graphique, vidéo et PDF |

Email et téléphone sont déjà intégrés avec des liens `mailto:` et `tel:`. Aucun formulaire ni service externe n'est nécessaire.

Pour modifier les couleurs, ouvrir `styles.css` et changer les variables `--bg`, `--panel`, `--text` et `--accent` dans `:root`.

## Médias

- Portrait optimisé en WebP.
- Visuels des projets tirés de la présentation fournie ; cliquer pour agrandir.
- Graphique temporel conservé en PNG.
- Vidéo H.264/AAC avec commandes de lecture, sans lecture automatique ; chargement à la demande.
- Présentation PDF disponible à la consultation et au téléchargement.

## Vérifications effectuées

Syntaxe JavaScript et présence des fichiers liés vérifiées. Accueil, filtre FPGA, ouverture/fermeture d'un visuel et lecture de la vidéo vérifiés dans Chrome. Le CSS prévoit une disposition mobile ; aucun test sur téléphone physique n'a été effectué.

Le site n'est pas encore publié sur GitHub.

Profil GitHub : https://github.com/zakaria-laouani
