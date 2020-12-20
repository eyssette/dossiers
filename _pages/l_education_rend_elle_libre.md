---
title: "L'éducation rend-elle libre ?"
permalink: /l_education_rend_elle_libre/
collection: l_education_rend_elle_libre
---

{% assign items = site.l_education_rend_elle_libre | sort: 'title' %}

{% for texte in items %}
  <h2>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h2>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}
