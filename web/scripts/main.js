require.config({
  baseUrl: '/',
  paths: {
    'createjs-easeljs': 'node_modules/createjs-easeljs/lib/easeljs-0.8.2.combined',
    'createjs-tweenjs': 'node_modules/createjs-tweenjs/lib/tweenjs-0.6.0.combined'
  },

  shim: {
    'createjs-easeljs': { exports: 'createjs' },
    'createjs-tweenjs': { exports: 'createjs' }
  }
});

require(['web/scripts/umds/wombat.umd'], function(wombat) {
  console.log(wombat);

});