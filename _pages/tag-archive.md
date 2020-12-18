---
title: "Textes classés par notions"
permalink: /notions/
layout: tags
author_profile: true
---

{% assign alldocs = site.documents %}	

{% assign alldocsunique = '' | split: ',' %}

{% for item in alldocs %}
	{% unless alldocsunique contains item.title %}
        {% assign alldocsunique = alldocsunique | push: item %}
    {% endunless %}
{% endfor %}

{% assign grouptag =  alldocsunique | map: 'tags' | join: ','  | split: ','  | group_by: tag %}
{%- for tag in grouptag -%}
<h2>{{- tag.name -}} : {{tag.size}}</h2>
<ul>
	{%- for document in alldocsunique -%}
    	{% if document.tags contains tag.name %}
        	 <li><a href="https://eyssette.github.io/dossiers{{- document.url -}}">{{- document.title -}}</a></li>
		 {% endif %}
    {%- endfor -%}
</ul>
{%- endfor -%}