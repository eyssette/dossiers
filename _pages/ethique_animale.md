---
title: "Éthique animale"
permalink: /ethique_animale/
collection: ethique_animale
---

{% assign items = site.ethique_animale | sort: 'title' %}

{% for texte in items %}
  <h2>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h2>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}
