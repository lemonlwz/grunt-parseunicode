/*
 * grunt-parseunicode
 * https://github.com/lemonroot/parseunicode
 *
 * Copyright (c) 2012 lemonlwz
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md


  var fs = require('fs');
  var path = require('path');
  var iconv = require('iconv-lite');

  // ==========================================================================
  // TASKS
  // ==========================================================================

  /**
   * Created by zhanye.xyf
   * Date: 2012-6-7
   * Desc: 将除了uncode编码0到255的字符转为unicode转码
   * ASCII字符集只有256个字符，用0-255之间的数字表示，包括大小写字母、数字、已经少数特殊符号：如标点、货币符号等。
  */

  /**
   * @param {Buffer\String} 要unicode的对象
   * @param {Boolean} flag 编码后所带的前缀。 为true 则为\U，在js文件中可用；为false，则为\，在css文件中可用
   */
  function escapeIt(buf,flag){
    var str =  Buffer.isBuffer(buf) ? buf.toString(): buf;
    var len = str.length;
    var ret = '';
    var preFix = flag ? '\\u' :'\\';
    for (var i = 0; i < len; i++) {
      var bit = str.charCodeAt(i);
      if (bit < 0 || bit > 255){
        ret += preFix + bit.toString(16);
      } else {
        ret += str[i];
      }
    }

    return ret;
  }

  grunt.registerMultiTask('parseunicode', 'parse unicode', function() {

    var str, buffer, charset, type;

    this.data.options = this.data.options || {};
    charset = this.data.options.charset || 'utf8';
    type = this.data.options.type !== 'js' ? false : true ;

    grunt.file.expandFiles(this.file.src).forEach(function(filepath) {

      str = iconv.decode(fs.readFileSync(filepath, ''), charset);
      buffer = iconv.encode(escapeIt(str, type), charset);
      fs.writeFileSync(filepath, buffer, charset);

    });

    grunt.log.write(grunt.helper('parseunicode'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('parseunicode', function() {
    return 'parseunicode!!!';
  });

};
