const FutuQuant = require('futuquant');

const config = require('./ignore/config');

const ft = new FutuQuant(config);

const init = async () => {
  await ft.init();

  const security = { code: '00700', market: 1 };
  // 每支股票订阅一个类型占用一个额度。
  // 订阅额度上限与用户等级相关，一级: 1000, 二级: 300 , 三级: 100

  // 先订阅基础报价，才能获取基础行情
  await ft.qotSub({
    securityList: [security],
    subTypeList: [1] // 基础报价
  });
  const [basicQot] = await ft.qotGetBasicQot([security]);
  console.log('00700基本行情', basicQot);
  console.log('00700当前价格', basicQot.curPrice);
};

init();
