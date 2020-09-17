import axios from 'axios';




export function sendGetRequest(url, params, ok,notOk, error ){
    axios.get(url,params).then((response)=>{
        if(response.status===200){
            ok(response.data);
        }else{
            notOk(response.status,response.statusText,response.data);
        }
    }).catch(error);
}

export function sendPostRequest(url, params, ok,notOk, error){
    axios.post(url,params).then((response)=>{
        if(response.status===200){
            ok(response.data);
        }else{
            notOk(response.status,response.statusText,response.data);
        }
    }).catch(error);
}

export function convertRes2Blob(response) {
    // 提取文件名
    const fileName = "report.html";
    // 将二进制流转为blob
    const blob = new Blob([response], { type: 'application/octet-stream' })
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
      window.navigator.msSaveBlob(blob, decodeURI(fileName))
    } else {
      // 创建新的URL并指向File对象或者Blob对象的地址
      const blobURL = window.URL.createObjectURL(blob)
      // 创建a标签，用于跳转至下载链接
      const tempLink = document.createElement('a')
      tempLink.style.display = 'none'
      tempLink.href = blobURL
      tempLink.setAttribute('download', decodeURI(fileName))
      // 兼容：某些浏览器不支持HTML5的download属性
      if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank')
      }
      // 挂载a标签
      document.body.appendChild(tempLink)
      tempLink.click()
      document.body.removeChild(tempLink)
      // 释放blob URL地址
      window.URL.revokeObjectURL(blobURL)
    }
  }
  