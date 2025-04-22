---
_schema: default
title: CloudCannon Astro Starter
seo:
  page_description: >-
    A starting point for developers looking to build a website with Astro, using Bookshop components in CloudCannon.
  canonical_url:
  featured_image:
  featured_image_alt:
  author_twitter_handle:
  open_graph_type:
  no_index: false
hero_block:
  _bookshop_name: heroes/hero-video
  heading:
    heading_text: A heading
    text_color: '#ffffff'
  subheading:
    text_content: Some text
    text_color: '#ffffff'
  video:
    video_path: /videos/nz-coast.mp4
    poster_image: /images/nz-coast-poster.png
  header_style_overrides:
    background_color: transparent
    text_color: '#ffffff'
    hover_text_color: '#F1F1F1'
    alternate_logo: 
      image_path: 
      logo_alt_text: 
  background_filters:
    brightness: 0.5
    blur: 1
  buttons: []
content_blocks:
  - _bookshop_name: left-right
    background_color: '#ffffff'
    flipped: true
    heading:
      heading_text: Keep what you need. Delete the rest.
      text_color: '#333232'
    text:
      text_content: >-
        The Astro CloudCannon Starter's aim is to get developers building their own site quickly in CloudCannon. This template is trying to strike a balance between minimal, and easy-to-delete boiler plate, while providing some commonly used features out of the box:
        
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

      text_color: '#333232'
    image:
      image_path: /src/assets/images/undraw-hello.svg
      alt_text: An image
    button:
  - _bookshop_name: left-right
    background_color: '#ffffff'
    flipped: false
    heading:
      heading_text: You choose your editing experience.
      text_color: '#333232'
    text:
      text_content: >-
        A flexible git-backed CMS that specialises in editing markdown and data files. 
        

        Visual editing allows you to preview your changes live before you save them. 
        

        Git-backed means you can keep all your familiar git workflows, while providing an easy-to-understand interface for non-technical editors to collaborate via git. 
      text_color: '#333232'
    image:
      image_path: /src/assets/images/undraw-startup.svg
      alt_text: An image
    button:
      _bookshop_name: buttons/primary
      button_text: GitHub
      button_icon: GitHub
      button_link: https://github.com/CloudCannon/Astro-starter/
      button_aria_label:
      background_color: '#034AD8'
      hover_brightness: 0.85
      text_color: '#ffffff'
---
