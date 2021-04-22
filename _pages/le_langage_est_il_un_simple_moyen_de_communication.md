---
title: "Le langage est-il un simple moyen de communication ?"
permalink: /le_langage_est_il_un_simple_moyen_de_communication/
collection: le_langage_est_il_un_simple_moyen_de_communication
---

{% assign items = site.le_langage_est_il_un_simple_moyen_de_communication | sort: 'title' %}

{% assign items = items | sort: 'order' %}

{% for texte in items %}
  {% if texte.order == '1a1' %}
  <h2>I – Le langage n'est pas un simple moyen de communication : la complexité du langage le distingue des autres moyens de communication</h2>
  {% endif %}
  {% if texte.order == '2a1' %}
  <h2>II – Le langage n'est pas un simple moyen de communication : il peut aussi constituer un obstacle à la communication, et les enjeux sociaux, politiques et culturels du langage montrent qu'il n'est pas un simple instrument au service d'un individu</h2>
  {% endif %}
  {% if texte.order == '3a1' %}
  <h2>III – Le langage n'est pas un simple moyen de communication : le langage ne fait pas qu'exprimer des pensées intérieures déjà constituées, il joue un rôle dans la formation même de nos pensées</h2>
  {% endif %}
  <h3>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h3>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}
