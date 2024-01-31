export const mapBody = (body) => {
  const [_charset, data] = body;

  const securities = data.securities.slice(0, 25);
  const marketdata = data.marketdata.slice(0, 25);

  return { securities, marketdata };
};
