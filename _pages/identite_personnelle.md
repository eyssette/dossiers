---
title: "L'identité personnelle"
permalink: /identite_personnelle/
collection: identite_personnelle
---

{% assign items = site.identite_personnelle | sort: 'title' %}

{% for texte in items %}
  <h2>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h2>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}
