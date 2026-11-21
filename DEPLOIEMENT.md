# Mettre à jour et déployer le portfolio

## 1. Mettre à jour le dépôt
Copie le contenu de cette archive à la racine de `My-portfolio` (remplace les fichiers existants), puis :

```bash
npm install
npm start            # vérifie en local sur http://localhost:4200
git add .
git commit -m "feat: refonte du portfolio (design, animations, CV à jour)"
git push
```

## 2. Déployer gratuitement sur Vercel (recommandé)
1. Va sur vercel.com et connecte-toi avec GitHub.
2. « Add New… » puis « Project », et importe `JESSY2023-bit/My-portfolio`.
3. Vercel détecte Angular. Vérifie l'« Output Directory » : `dist/portfolio-angular-scaffold/browser`.
4. Clique « Deploy ». Tu obtiens une adresse du type `my-portfolio-xxx.vercel.app`.
   Chaque `git push` redéploie automatiquement.


