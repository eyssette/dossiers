---
title: "Textes classés par notions"
permalink: /notions/
layout: tags
author_profile: true
---

{% assign alldocs = site.documents %}	

{% assign alldocsbytitle = alldocs | group_by: 'title' | sort: 'title' %}	

{% assign alldocsunique = '' | split: '' %}

{% for docs in alldocsbytitle %}
    {% assign alldocsunique = alldocsunique | push: docs.items[0] %}
{% endfor %}

{% assign grouptag =  alldocsunique | map: 'tags' | join: ','  | split: ','  | group_by: tag %}

{% assign grouptagsorted = grouptag | sort: 'tag' %}

{%- for tag in grouptagsorted -%}
<h2>{{- tag.name -}} : {{tag.size}}</h2>
<ul>
	{%- for document in alldocsunique -%}
    	{% if document.tags contains tag.name %}
        	 <li><a href="https://eyssette.github.io/dossiers{{- document.url -}}">{{- document.title -}}</a></li>
		 {% endif %}
    {%- endfor -%}
</ul>
{%- endfor -%}