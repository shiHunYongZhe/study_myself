const walkFile = require('./walk-file')

/**
 * 获取sql目录下的文件目录数据
 * @return {object} 
 */
function getSqlMap () {
  let basePath = __dirname.replace(/\\/g, '\/')

  let pathArr = basePath.split('\/')
  pathArr.pop()
  basePath = pathArr.join('/') + '/sql/'
  let fileList = walkFile( basePath, 'sql' )
  return fileList
}

module.exports = getSqlMap