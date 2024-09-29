

// module.exports = {
//     presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
//   };

// added ["@babel/preset-react",{runtime:"automatic"}]. if we dont write {runtime:"automatic"} the it will throw an error.
module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }],["@babel/preset-react",{runtime:"automatic"}]
  ]
  };

  