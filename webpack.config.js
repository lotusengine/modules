import path from 'path'
import glob from 'glob'

// Glob entries and build names so we can build output dynamically
const getEntries = () => {
  var files = glob.sync('./modules/**/src/index.js')
  var entries = {}

  for (var i = 0; i < files.length; i++) {
    var entry = files[i]
    var keyName = path.dirname(entry).replace('/src', '/dist')
    entries[keyName] = entry
  }

  return entries
}

export default {
  mode: 'production',
  entry: getEntries('modules/**/src/index.js'),
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: __dirname,
    filename: '[name]/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}
