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

{% assign taglist = '' | split: '' %}

{%- for tag in grouptag -%}

{% capture tagitems %}

<h2 id="{{tag.name | replace: ' ', '-' | downcase}}">{{- tag.name -}} : {{tag.size}}</h2>
<ul>
	{%- for document in alldocsunique -%}
    	{% if document.tags contains tag.name %}
        	 <li><a href="https://eyssette.github.io/dossiers{{- document.url -}}">{{- document.title -}}</a></li>
		 {% endif %}
    {%- endfor -%}
</ul>

{% endcapture %}

{% assign taglist = taglist | push: tagitems %}

{%- endfor -%}

{% capture output %}{{ output }}{{ taglist | sort }}{% endcapture %}
{{ output }}

