---
title: "Textes classés par auteurs"
layout: categories
permalink: /auteurs/
author_profile: true
---


{% assign alldocs = site.documents | uniq | <additional standard filtering and sorting> %}	
{% assign groupcategories =  alldocs | map: 'categories' | join: ','  | split: ','  | group_by: category %}
{%- for category in groupcategories -%}
<h2>{{- category.name -}} : {{category.size}}</h2>
<ul>
	{%- for document in alldocs -%}
    	{% if document.categories contains category.name %}
        	 <li><a href="https://eyssette.github.io/dossiers{{- document.url -}}">{{- document.title -}}</a></li>
		 {% endif %}
    {%- endfor -%}
</ul>
{%- endfor -%}