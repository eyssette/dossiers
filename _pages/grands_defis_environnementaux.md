---
title: "Grands défis environnementaux"
permalink: /grands_defis_environnementaux/
collection: _grands_defis_environnementaux
---

{% assign items = site.grands_defis_environnementaux | sort: 'title' %}

{% for texte in items %}
  <h2>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h2>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}
