# NYU Earth Systems Institute: methods, code and data

Website https://earthsystemsinstitute.nyu.edu/

An interactive list of the algorithms, open-source code and datasets from the Institute's affiliated faculty, filterable by research area, type and faculty member.

## Files

- `index.html` is the page. You shouldn't need to edit it.
- `data.js` holds all the content: faculty names and links, and one row per method, repository or dataset. Edit this file to add, change or remove entries. The comment at the top explains each field.
- `.nojekyll` tells GitHub Pages to serve the files as they are.

## Publish on GitHub Pages

1. Create a new public repository on GitHub, for example `esi-resources`.
2. Upload `index.html`, `data.js`, `README.md` and `.nojekyll` to the root of the repository (Add file > Upload files, then Commit changes). If the upload dialog skips `.nojekyll` because it starts with a dot, create it instead with Add file > Create new file, name it `.nojekyll`, leave it empty and commit.
3. Go to Settings > Pages. Under "Build and deployment", set Source to "Deploy from a branch", choose the `main` branch and the `/ (root)` folder, and click Save.
4. After a minute or two the page is live at `https://<account>.github.io/esi-resources/`. The address is shown at the top of the Pages settings.

## Update the content

Open `data.js` on GitHub, click the pencil icon, edit, and commit. The live page updates within a couple of minutes.

To add an entry, copy an existing row in `ITEMS` and change it. Every faculty key you use must exist in `FACULTY`. To hide entries whose links haven't been verified, set `SHOW_UNVERIFIED: false`.

## Link it from WordPress

Add a Custom HTML block on the WordPress page with the button in `wordpress-button.html`, after replacing the address with your GitHub Pages address.
