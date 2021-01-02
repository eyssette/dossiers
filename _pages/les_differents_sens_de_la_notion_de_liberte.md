---
title: "Les différents sens de la notion de liberté"
permalink: /les_differents_sens_de_la_notion_de_liberte/
collection: les_differents_sens_de_la_notion_de_liberte
---

{% assign items = site.les_differents_sens_de_la_notion_de_liberte | sort: 'title' %}

{% assign items = items | sort: 'order' %}

{% for texte in items %}
  {% if texte.order == '1a1' %}
  <h2>I – La liberté d'action : la liberté comme pouvoir de faire ce que l'on désire</h2>
  {% endif %}
  {% if texte.order == '2a1' %}
  <h2>II – La liberté de la source : la liberté comme pouvoir d'être véritablement la source de ses actes</h2>
  {% endif %}
  {% if texte.order == '3a1' %}
  <h2>III – La liberté des alternatives : la liberté comme pouvoir d'agir autrement</h2>
  {% endif %}
  <h3>{{ texte.title }} <a href="https://eyssette.github.io/dossiers{{- texte.url -}}">↪ lien</a></h3>
  <p>{{ texte.content | markdownify }}</p>
{% endfor %}
