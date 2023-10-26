# About this site

This site is populated via Great Lakes Data, a central repository that is used to keep information consistent across our sites. When this site is built, a prebuild script runs to pull in the latest content from the data lake, which we then format and move to the correct location.

## 🚀 Project Structure

All shared content is edited on the lake. The individual sites are configured to take the latest version of whatever parts of the lake they require to build. Some files are turned into markdown collection files, and some are turned into JSON data files.

```
Data Lake
(Blog, Profiles, Locations)
│
├── blog/
│   ├── blog/
│   │  
│   └── profiles.json/
│
├── profiles/
│   ├── profiles/
│   │
│   ├── blog.json/
│   │
│   └── locations.json/
│
└── locations/
    ├── locations/
    │
    └── profiles.json/

```

Any images can be placed in the `content/images` directory on the data lake, and each time the prebuild runs, the latest images are copied into the individual site for use.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name. CloudCannon looks for `.md` pages with frontmatter.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `./.cloudcannon/prebuild` | Runs prebuild locally (clones the lake data)     |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Can't see the latest information from the lake?

Once the data on the lake has been saved, and CloudCannon has pushed it to your repository, trigger a rebuild on the individual site to pull in the latest changes from the lake.

If working locally, and trying to get the latest information from the lake, run `./.cloudcannon/prebuild` in a CLI from the root of your site.
