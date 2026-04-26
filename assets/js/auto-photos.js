---
---
window.AUTO_PHOTOS = [
{% assign first_photo = true %}
{% for file in site.static_files %}
{% if file.path contains '/assets/photos/gallery/' %}
{% assign filename = file.name %}
{% assign stem = filename | split: '.' | first %}
{% assign maybe_date = stem | slice: 0, 10 %}
{% assign title_part = stem | remove_first: maybe_date | remove_first: '_' | remove_first: '-' %}
{% if title_part == '' %}{% assign title_part = stem %}{% endif %}
{% assign title_text = title_part | replace: '-', ' ' | replace: '_', ' ' %}
{% assign slug_text = title_part | slugify %}
{% unless first_photo %},{% endunless %}
{% assign first_photo = false %}
  {
    slug: "{{ slug_text }}",
    src: "{{ file.path | remove_first: '/' }}",
    detailSrc: "{{ file.path | remove_first: '/' }}",
    title: { en: {{ title_text | capitalize | jsonify }}, zh: {{ title_text | capitalize | jsonify }}, ja: {{ title_text | capitalize | jsonify }} },
    location: { en: "", zh: "", ja: "" },
    date: "{% if maybe_date contains '-' %}{{ maybe_date }}{% else %}{{ site.time | date: "%Y-%m-%d" }}{% endif %}",
    year: "{% if maybe_date contains '-' %}{{ maybe_date | slice: 0, 4 }}{% else %}{{ site.time | date: "%Y" }}{% endif %}",
    camera: "Unknown camera",
    lens: "",
    focalLength: "",
    aperture: "",
    shutter: "",
    iso: "",
    tags: [
      {% assign printed = false %}
      {% assign lower = stem | downcase %}
      {% if lower contains 'tokyo' %}{% if printed %},{% endif %}"tokyo"{% assign printed = true %}{% endif %}
      {% if lower contains 'hokkaido' %}{% if printed %},{% endif %}"hokkaido"{% assign printed = true %}{% endif %}
      {% if lower contains 'kyoto' %}{% if printed %},{% endif %}"kyoto"{% assign printed = true %}{% endif %}
      {% if lower contains 'kamakura' %}{% if printed %},{% endif %}"kamakura"{% assign printed = true %}{% endif %}
      {% if lower contains 'sea' %}{% if printed %},{% endif %}"sea"{% assign printed = true %}{% endif %}
      {% if lower contains 'mountain' %}{% if printed %},{% endif %}"mountain"{% assign printed = true %}{% endif %}
      {% if lower contains 'street' %}{% if printed %},{% endif %}"street"{% assign printed = true %}{% endif %}
      {% unless printed %}"photo"{% endunless %}
    ],
    caption: { en: "", zh: "", ja: "" },
    note: { en: "", zh: "", ja: "" }
  }
{% endif %}
{% endfor %}
];
