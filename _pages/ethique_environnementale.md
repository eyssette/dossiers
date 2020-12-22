---
title: "Éthique environnementale"
permalink: /ethique_environnementale/
collection: ethique_environnementale
---

{% assign items = site.ethique_environnementale | sort: 'title' %}

{% assign items = items | sort: 'order' %}

{% for texte in items %}
  <h2>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h2>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}
