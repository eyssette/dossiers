---
title: "Grands défis environnementaux"
permalink: /grands_defis_environnementaux/
collection: _grands_defis_environnementaux
---

{% for texte in site.grands_defis_environnementaux %}
  <h2>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h2>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}