# sample-basic-web-application
sample project for gulp building with browserify and browserSync.

## introdution
### required
node
```
ndenv install `ndenv local`
```

bower
```
npm install -g bower
```

### install
```
npm install && bower install
```

## build
```
npm run build
```

## start server
```
npm start
```

## buildings

* html, image(*.jpg, *.png, *.gif) files in the `app` directory are copied to the `dist` directory.
* js files in the `app/js` directory are bundled up by browserify and output in a file named "bundle.js" to "dist" directory .
