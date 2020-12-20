---
title: "Philosophie de la culture"
permalink: /philosophie_de_la_culture/
collection: philosophie_de_la_culture
---

{% assign items = site.philosophie_de_la_culture | sort: 'title' %}

{% for texte in items %}
  <h2>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h2>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}
