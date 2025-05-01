---
_schema: default
title: CloudCannon Astro Starter
seo:
  page_description: >-
    A starting point for developers looking to build a website with Astro, using
    Bookshop components in CloudCannon.
  canonical_url:
  featured_image:
  featured_image_alt:
  author_twitter_handle:
  open_graph_type:
  no_index: false
hero_block:
  _bookshop_name: heroes/hero
  background_color: '#ffffff'
  heading:
    heading_text: CloudCannon Astro Starter
    heading_gradient_color: '#A0A2FF'
    text_color: '#333232'
  subheading:
    text_content: >-
      A starting point for developers looking to build a website with Astro,
      using Bookshop components in CloudCannon. Create your own copy, and start
      creating your own components to use in CloudCannon’s CMS.
    color: '#393939'
    text_color: '#333232'
  image:
    image_path: /src/assets/images/undraw-online-test.svg
    alt_text: An image
  buttons:
    - _bookshop_name: buttons/primary
      button_text: GitHub
      button_icon: GitHub
      button_link: https://github.com/CloudCannon/astro-starter/
      background_color: '#034AD8'
      hover_brightness: 0.85
      text_color: '#ffffff'
      button_aria_label:
    - _bookshop_name: buttons/secondary
      button_text: CloudCannon
      button_icon: CloudCannon
      button_link: https://www.cloudcannon.com
      text_color: '#034AD8'
      hover_brightness: 0.85
      button_aria_label:
      background_color: '#034ad8'
content_blocks:
  - _bookshop_name: left-right
    background_color: '#ffffff'
    heading:
      heading_text: Keep what you need. Delete the rest.
      color: '#393939'
      text_color: '#333232'
    text:
      text_content: >-
        The Astro CloudCannon Starter's aim is to get developers building their
        own site quickly in CloudCannon. This template is trying to strike a
        balance between minimal, and easy-to-delete boiler plate, while
        providing some commonly used features out of the box:

        - Page building with Bookshop components

        - Markdown options & styles

        - Blog with pagination & tags

        - Built-in search with Pagefind

        - Pre-configured shortcodes

        - Header and Footer controls

        - Tailwind

        - Font Awesome icons

        - Create and delete pages

        - Accessibility controls

        - SEO controls

        - Color palette controls
      color: '#393939'
      text_color: '#333232'
    image:
      image_path: /src/assets/images/undraw-hello.svg
      alt_text: An image
    flipped: true
    button:
  - _bookshop_name: left-right
    background_color: '#ffffff'
    heading:
      heading_text: You choose your editing experience.
      color: '#393939'
      text_color: '#333232'
    text:
      text_content: >-
        A flexible git-backed CMS that specialises in editing markdown and data
        files. 


        Visual editing allows you to preview your changes live before you save
        them. 


        Git-backed means you can keep all your familiar git workflows, while
        providing an easy-to-understand interface for non-technical editors to
        collaborate via git. 
      color: '#393939'
      text_color: '#333232'
    image:
      image_path: /src/assets/images/undraw-startup.svg
      alt_text: An image
    flipped: false
    button:
      _bookshop_name: buttons/primary
      button_text: GitHub
      button_icon: GitHub
      button_link: https://github.com/CloudCannon/Astro-starter/
      background_color: '#034AD8'
      hover_brightness: 0.85
      text_color: '#ffffff'
      button_aria_label:
  - _bookshop_name: text-block
    background_color: '#808080'
    heading:
      text_content:
      text_color: '#333232'
    layout:
      text_alignment: start
      column_alignment: start
      column_number: 2
    text_color: '#9ABCA7'
    text_content: >-
      ## This is it's own block.


      A new piece of text.<br>New lines and all.


      Here's some more <u>coming</u> *at* **ya**. Here's some more <u>coming</u>
      *at* **ya**. Here's some more <u>coming</u> *at* **ya**.
  - _bookshop_name: stat-counter
    background_color: '#ffffff'
    heading:
      text_content: A ticker component
      text_color: '#323232'
    load_style: visible
    statistics:
      - text_color: '#323232'
        statistic_label_prefix: $
        statistic_label_suffix: + USD
        maximum_count: 100
        tick_time: 3
        increment: 2
      - text_color: '#323232'
        statistic_label_prefix: Over
        statistic_label_suffix: + Users
        maximum_count: 10000
        tick_time: 1
        increment: 50
      - text_color: '#323232'
        statistic_label_prefix: In
        statistic_label_suffix: + Countries
        maximum_count: 20
        tick_time: 4
        increment: 1
---
