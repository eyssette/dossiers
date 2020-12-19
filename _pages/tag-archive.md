---
title: "Textes classés par notions"
layout: tags
permalink: /notions/
author_profile: true
---

{% assign alldocs = site.documents %}	

{% assign alldocsbytitle = alldocs | group_by: 'title' %}	

{% assign alldocsunique = '' | split: '' %}

{% for docs in alldocsbytitle %}
    {% assign alldocsunique = alldocsunique | push: docs.items[0] %}
{% endfor %}

{% assign alldocsunique = alldocsunique | sort: 'title' %}

{% assign grouptag =  alldocsunique | map: 'tags' | join: ','  | split: ','  | group_by: tag %}

{% assign num_tags = grouptag | size %}

{%- for tag in grouptag -%}

{% assign tag_index = forloop.index0 | modulo: num_tags %}

{% capture taglist[tag_index] %}

<h2>{{- tag.name -}} : {{tag.size}}</h2>
<ul>
	{%- for document in alldocsunique -%}
    	{% if document.tags contains tag.name %}
        	 <li><a href="https://eyssette.github.io/dossiers{{- document.url -}}">{{- document.title -}}</a></li>
		 {% endif %}
    {%- endfor -%}
</ul>

{% endcapture %}

{%- endfor -%}

{% taglist | sort %}

