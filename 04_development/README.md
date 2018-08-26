Webpack
=======

Based on the example at https://webpack.js.org/guides/development/

```sh
# build
$ npm run build
```

Source Maps
-----------

An erorr without source maps:
![error without source maps](./without.png)

And with source maps:
![error with source maps](./with.png)


Responding to change
--------------------

* You can watch files and recompile when they are modified
* `webpack-dev-server` starts a simple web server and the ability to use live reloading.
* You can control the server instead of using `webpack-dev-server`'s (shown here)
