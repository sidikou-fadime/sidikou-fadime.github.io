# Analyse Socio-Économique et Standardisation des Salaires en Afrique de l'Ouest

## 📌 Présentation du Projet
Ce projet consiste en une analyse exploratoire des données (EDA) portant sur les 16 pays de l'Afrique de l'Ouest. L'objectif principal était de nettoyer des données brutes hétérogènes extraites des rapports de la **Banque Mondiale (2024-2025)**, de standardiser les salaires minimums locaux en une devise unique (USD) pour permettre une comparaison juste, et d'étudier leurs corrélations avec des indicateurs démographiques et économiques majeurs (Population, Superficie, Inflation, Espérance de vie).

## 🛠️ Compétences et Outils Utilisés
- **Langage :** Python 3
- **Librairies clés :** - `Pandas` : Pour la structuration en DataFrame, le nettoyage des données (*Data Wrangling*) et l'ingénierie des variables (Feature Engineering).
  - `Numpy` : Pour la gestion des structures de données et des axes graphiques.
  - `Matplotlib` : Pour la création de visualisations (Diagramme en barres des populations et Nuage de points des densités).
- **Concepts appliqués :** Standardisation monétaire (gestion des salaires journaliers vs mensuels), traitement des anomalies de devises (redénomination de monnaies comme le Leone ou l'Ouguiya), analyse multi-factorielle.

## 📊 Principales Étapes de l'Analyse
1. **Collecte et structuration :** Rassemblement des données économiques de la Banque Mondiale pour la sous-région et création du DataFrame avec indexation personnalisée (codes ISO pays).
2. **Data Cleaning & Harmonisation :** - Correction des salaires journaliers (Ghana, Gambie) extrapolés sur une base mensuelle standard de 21 jours ouvrés.
  - Ajustement des taux de change et mise à jour des valeurs monétaires (Mauritanie, Sierra Leone).
3. **Feature Engineering :** Calcul du salaire minimum converti en USD (`minimum_usd_wage`) et calcul du PIB par habitant (`gdp_people`).
4. **Visualisation :** Identification visuelle des disparités démographiques et de la corrélation superficie/population.

## 📈 Résultats et Fichiers inclus
- `analyse_socio_economique_afrique_ouest.py` : Le script Python complet, nettoyé et documenté.
- `donnees_socio_economiques_afrique_ouest.csv` : La base de données finale (indicateurs Banque Mondiale 2024-2025), nettoyée et prête à l'emploi.
