Webpack
=======

Based on the example at https://webpack.js.org/guides/output-management/

```sh
# build
$ npm run build
```

To see the manifest:

```sh
$ jq < dist/manifest.json
{
  "app.js": "app.bundle.js",
  "print.js": "print.bundle.js",
  "index.html": "index.html"
}
```
