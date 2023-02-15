export const title = "Dossiers de textes";

const baseURL = "https://raw.githubusercontent.com/eyssette/dossiers/master/data/"

export const src = [
	baseURL+"anarchisme.tsv",
	baseURL+"bonheur-ideal.tsv",
	baseURL+"differents-sens-notion-liberte.tsv",
	baseURL+"education-rend-libre.tsv",
	baseURL+"ethique-animale.tsv",
	baseURL+"ethique-environnementale.tsv",
	baseURL+"grands-defis-environnementaux.tsv",
	baseURL+"identite-personnelle.tsv",
	baseURL+"langage-simple-moyen-communication.tsv",
	baseURL+"philosophie-contemporaine-technique.tsv",
	baseURL+"philosophie-de-la-culture.tsv",
	baseURL+"temps-obstacle-bonheur.tsv"
];
/* export const src = ['https://raw.githubusercontent.com/eyssette/textes-philo/main/data/textes-FINAL.tsv', 'https://raw.githubusercontent.com/eyssette/textes-philo/main/data/textes-new.tsv']; */
/* https://raw.githubusercontent.com/eyssette/textes-philo/main/data/textes-new.tsv */
/* https://raw.githubusercontent.com/eyssette/sujets-philosophie-bac/main/data/dissertations.tsv */
/* export const src = ['https://raw.githubusercontent.com/eyssette/sujets-philosophie/main/data/sujets-vrac.tsv'] */

export const contentAfterTable =
	'Site créé par <a href="http://eyssette.github.io/">Cédric Eyssette</a>';

/* Si la base de données est trop importante, il faut que la recherche ne se déclenche pas automatiquement, mais seulement en appuyant sur Entrée, et il faut désactiver l'utilisation d'une regex. On peut également choisir de calculer un score de pertinence ou non. */
export const automaticSearch = true;
export const desactivateRegexDefault = true;
export const scoreDisplay = false;

export const activateFilters = false;

export const textToSearchDefaultSmallScreen = "";
export const textToSearchDefault = "";

/* Pour réorganiser les données (notamment pour faire une version différente sur mobile) 
0:Texte	1:Auteur·e	2:Référence	3:Dossier	4:Notions	5:Résumé
*/
export const reorganizeData = true;
export const reorganizeDataIfSmallScreen = true;
export function reorganizeDataFunction(arrInit) {
	/* Un exemple qui ne garde que certaines colonnes */
	return arrInit.map((element) => [element[1], '<p><b>'+element[5]+'</b></p>'+element[0]+'<br>'+element[1]+', '+element[2], element[3], element[4]]);
	/* Un exemple de regroupement */
	/* return arrInit.map(element => [element[0],  element[2] + '<br/>' + element[1] + (element[3] ? element[3] : '')]);  */
}
export function reorganizeDataFunctionIfSmallScreen(arrInit) {
	/* Un exemple qui ne garde que certaines colonnes */
	return arrInit.map((element) => ['<p>Dossier :\\t'+element[3]+'\\t– Notions : '+element[4]+'<p><b>'+element[1]+' – '+element[5]+'</b></p>'+element[0]+'<br>'+element[2]]);
	/* Un exemple de regroupement */
	/* return arrInit.map(element => [element[0],  element[2] + '<br/>' + element[1] + (element[3] ? element[3] : '')]);  */
}

/* Pour changer le titre des colonnes  */
export const dataNoHeader = false;
export const changeHeader = true;
export const newHeader = ["Auteur·e", "Texte", "Dossier", "Notions"];
export const newHeaderIfSmallScreen = ["Texte"];
/* export const newHeader=['Auteur·e','Texte']; */
/* export const newHeader = ['Intitulé du sujet']; */

/* Pour que certaines colonnes s'affichent en plus petit */
export const smallColumns = [3, 4];
export const smallColumnsIfSmallScreen = [];

/* Surligner les mots recherchés */
export const markText = true;

/* Si les données sont déjà triées en ordre ascendant pour une colonne, il faut l'indiquer ici, en notant les numéros des colonnes concernées */
export let historyColumnsClickDefault = [0];

export const tableCSS = "";
/* export let tableCSS='small' */

/* Pour indiquer des conditions supplémentaires possibles (cases à cocher) avec le format suivant : intitulé de la condition, regex correspondante. Les conditions supplémentaires ne sont possibles que si desactivateRegexDefault = false */
export const useAdditionalConditions = false;
export const additionalConditionsArray = [
	/* ['Seulement des sujets avec une question', '(?=.*\\?$)'],
	['Seulement des sujets sans question', '(?=.*([A-zÀ-ÿ]|»|\\)|[0-9]|!|>)$)'], */
	[
		"Rechercher seulement dans les intitulés des sujets",
		"(?<=.*?\\t.*?\\t.*?\\t.*?\\t.*)",
	],
];
