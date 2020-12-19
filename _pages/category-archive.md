---
title: "Textes classés par auteurs"
layout: categories
permalink: /auteurs/
author_profile: true
---

{% assign alldocs = site.documents %}	

{% assign alldocsbytitle = alldocs | group_by: 'title' %}	

{% assign alldocsunique = '' | split: '' %}

{% for docs in alldocsbytitle %}
    {% assign alldocsunique = alldocsunique | push: docs.items[0] %}
{% endfor %}



{% assign groupcategories =  alldocsunique | map: 'categories' | join: ','  | split: ','  | group_by: category | sort: 'categories' %}
{%- for category in groupcategories -%}
<h2 id="{{- category.name -}}">{{- category.name -}} : {{category.size}}</h2>
<ul>
	{%- for document in alldocsunique -%}
    	{% if document.categories contains category.name %}
        	 <li><a href="https://eyssette.github.io/dossiers{{- document.url -}}">{{- document.title -}}</a></li>
		 {% endif %}
    {%- endfor -%}
</ul>
{%- endfor -%}