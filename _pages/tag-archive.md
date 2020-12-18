---
title: "Textes classés par notions"
permalink: /notions/
layout: tags
author_profile: true
---

{% assign alldocs = site.documents | group_by: 'title' %}	

{% assign grouptag =  alldocs | map: 'tags' | join: ','  | split: ','  | group_by: tag %}
{%- for tag in grouptag -%}
<h2>{{- tag.name -}} : {{tag.size}}</h2>
<ul>
	{%- for document in alldocs -%}
    	{% if document.tags contains tag.name %}
        	 <li><a href="https://eyssette.github.io/dossiers{{- document.url -}}">{{- document.title -}}</a></li>
		 {% endif %}
    {%- endfor -%}
</ul>
{%- endfor -%}