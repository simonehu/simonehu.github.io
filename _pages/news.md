---
layout: page
title: archives
permalink: /news/
description:
---

{% include relative.html %}

{%if site.news %}
  <table>
    {% assign news = site.news | reverse %}
    {% for item in news %}
      <tr>
        <td class="date">{{ item.date | date: "%b. %-d. %Y" }}</td>
        <td class="announcement">
          {% if item.inline %}
            {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
          {% else %}
            <a class="news-title" href="{{relative}}{{ item.url | relative_url }}">{{ item.title }}</a>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </table>
{% else %}
  <p>No tidbits so far...</p>
{% endif %}

