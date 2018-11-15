module.exports = function(grunt) {

  grunt.initConfig({

    /*
         * Build a WAR (web archive) without Maven or the JVM installed.
         */
    war : {
      target : {
        options : {
          war_dist_folder : 'build_dir',
          war_name : 'FabLinkTest',
          webxml_welcome : 'index.html',
          webxml_display_name : 'FabLinkTest',
          webxml_mime_mapping : [ {
            extension : 'woff',
            mime_type : 'application/font-woff'
          } ]
        },
        files : [ {
          expand : true,
          cwd : 'dist',
          src : [ '**' ],
          dest : ''
        } ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-war');
};
