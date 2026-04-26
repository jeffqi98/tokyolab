---
---
window.AUTO_POSTS = [
{% for post in site.posts %}
  {
    title: {
      en: {{ post.title_en | default: post.title | jsonify }},
      zh: {{ post.title | jsonify }},
      ja: {{ post.title_ja | default: post.title | jsonify }}
    },
    date: "{{ post.date | date: "%Y-%m-%d" }}",
    year: "{{ post.date | date: "%Y" }}",
    monthDay: "{{ post.date | date: "%b %d" }}",
    read: {{ post.read | default: "5 min" | jsonify }},
    tags: {{ post.tags | jsonify }},
    url: "{{ post.url | remove_first: '/' }}",
    excerpt: {
      en: {{ post.excerpt_en | default: post.excerpt | strip_html | strip_newlines | jsonify }},
      zh: {{ post.excerpt | strip_html | strip_newlines | jsonify }},
      ja: {{ post.excerpt_ja | default: post.excerpt | strip_html | strip_newlines | jsonify }}
    }
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
];
