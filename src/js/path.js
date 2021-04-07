// 路径参数

/* 开发和测试环境 */
const dataPath = '/'

/* 真实环境 */
// const dataPath = '/beta/'

const pagePath = '/'

const localImgPath = '/'

export default {
  dataURL: dataPath + 'static/data/',
  headerimgURL: localImgPath + 'static/images/header/',
  navbarimgURL: localImgPath + 'static/images/navbar/',
  newsPAGE: pagePath + 'news/',
  newsimgURL: localImgPath + 'static/images/news/',
  hotelimgURL: localImgPath + 'static/images/hotel/',
  hotelPAGE: pagePath + 'hotel/',
  autumnHotelPAGE: pagePath + 'autumn_hotel/',
  productimgURL: localImgPath + 'static/images/product/',
  productPAGE: pagePath + 'product/',
  // 前端数据获取路径
  webControl: '/server/enter/main.php?controller=web&method='
}
