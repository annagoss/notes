# Notes

A static site built with [Eleventy](https://www.11ty.dev/) for organizing and displaying notes.

## Getting Started

### Prerequisites

- Node.js (npm will be used for package management)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with live reload:

```bash
npm run start
```

The site will be available at `http://localhost:8080`

### Build

Build the site for production:

```bash
npm run build
```

The built site will be generated in the `_site/` directory.

## Project Structure

```
src/                    # Source directory
├── _includes/          # Shared templates and layouts
│   └── base.njk       # Base HTML layout template
└── index.md           # Homepage content

_site/                  # Output directory (generated)
.eleventy.js           # Eleventy configuration
```

## Architecture

- **Static Site Generator**: Eleventy v3.1.1
- **Template Engine**: Nunjucks for layouts, Markdown for content
- **Input Directory**: `src/`
- **Output Directory**: `_site/`

## Content

Content files use YAML front matter to specify layout and metadata. Markdown content is processed and injected into Nunjucks layouts.

## Configuration

The main configuration is in `.eleventy.js`, which sets the input and output directories and other build settings.