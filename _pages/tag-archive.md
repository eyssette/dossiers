---
title: "Textes classés par notions"
permalink: /notions/
layout: tags
author_profile: true
---

{% assign alldocs = site.documents | <additional standard filtering and sorting> %}	
{% assign grouptag =  alldocs | map: 'tags' | join: ','  | split: ','  | group_by: tag %}
{%- for tag in grouptag -%}
    <h2>{{- tag.name -}} : {{tag.size}}</h2>
	{%- for document in alldocs -%}
    	{% if document.tags contains tag.name %}
        	 {{- <a href="{{ document.url }}">document.title</a> -}}
		 {% endif %}
    {%- endfor -%}
{%- endfor -%}