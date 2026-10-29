# WDD 131 — Dynamic Web Fundamentals

Course home page for Chinonye Philomena Okorie, Lagos, Nigeria.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Course home page with metadata, navigation, two cards, and footer |
| `styles/base.css` | Custom CSS with Flex navigation, Grid cards, and responsive layouts |
| `scripts/getdates.js` | Current year and document last-modified date |
| `images/profile.jpg` | Portrait reused from my WDD 130 course repository |
| `images/nigeria-flag.svg` | Local Nigerian flag image |
| `project/index.html` | Temporary final-project page |

## Preview

Open this repository folder in Visual Studio Code. Right-click `index.html` and
choose **Open with Live Server**. No package installation or build is required.
Google Fonts supplies Lato; the page uses local fallback fonts when offline.

## JavaScript dates

The script is loaded in the document head with `defer`, so it runs after the HTML
has been parsed. It inserts the current year and `document.lastModified` into the
footer using `textContent`. The modification date depends on the server response
and is not necessarily the time of the latest Git commit.

## Publish and check

Use **Settings → Pages → Deploy from a branch → main → /(root)**.
The expected site address is `https://finalove0106.github.io/wdd131/`.

Before submitting the live URL:

1. Run the [course audit](https://byui-cse.github.io/wdd-audits/wdd131-w01-homepage.html)
   and resolve any errors.
2. Run Lighthouse in Desktop mode. The rubric requires at least 95 in each of
   Accessibility, Best Practices, and SEO.
3. Use DevTools CSS Overview to confirm there are no AA colour-contrast errors.
4. In Network, use Empty Cache and Hard Reload and confirm the total transferred
   page size is at most 500 kB, including Google Fonts.
5. Check all navigation links and both dynamic dates.

The LinkedIn link uses the general home page allowed by the assignment. The
Scripture link is 1 Nephi 3:7. The final-project folder is a placeholder for later
course work.

## Checks completed during preparation

The local page was checked at desktop and phone widths, with no horizontal
overflow. Local assets and link targets exist, the two footer dates populate,
and the JavaScript syntax check passed. The tested text/background pairs exceed
the WCAG AA 4.5:1 contrast requirement. No official audit or Lighthouse score is
claimed by this readme; those checks must use the final published version.
