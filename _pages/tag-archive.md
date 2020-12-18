---
title: "Posts by Tag"
permalink: /tags/
layout: tags
author_profile: true
---

{% assign alldocs = site.documents | <additional standard filtering and sorting> %}	
{% assign grouptag =  alldocs | map: 'tags' | join: ','  | split: ','  | group_by: tag %}
{%- for tag in grouptag -%}
    <h1>{{- tag.name -}} - {{tag.size}}</h1>
	{%- for document in alldocs -%}
    	{% if document.tags contains tag.name %}
        	 <p>{{- document.title -}}
		 {% endif %}
    {%- endfor -%}
{%- endfor -%}