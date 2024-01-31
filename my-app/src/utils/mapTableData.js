
export const mapTableData = (securities, marketdata) => {
  const result = securities.map((secItem) => {
    const marketItem = marketdata.find(
      (markItem) => markItem.SECID === secItem.SECID,
    );

    const tableItem = {
      /** код */
      secId: secItem.SECID,
      /** краткое наименование */
      shortName: secItem.SHORTNAME,
      /** последняя */
      lastPrice: marketItem.LAST,
      /** изм.% */
      lasttoprevprice: marketItem.LASTTOPREVPRICE,
      /** первая */
      openPrice: marketItem.OPEN,
      /** мин */
      lowPrice: marketItem.LOW,
      /** макс */
      highPrice: marketItem.HIGH,
      /** ср.взеш */
      averagePrice: marketItem.WAPRICE,
      /** объем */
      valToday: marketItem.VALTODAY,
      /** дата */
      updateTime: marketItem.UPDATETIME,
    };

    return tableItem;
  });

  return result;
};