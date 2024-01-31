import "./App.css";
import { useEffect, useState } from "react";
import { mapBody } from "./utils/mapBody";
import { mapTableData } from "./utils/mapTableData";

const moexHost = "https://iss.moex.com/";
/** Получить данные по рынку */
const marketPath =
  "iss/engines/stock/markets/shares/boardgroups/57/securities.jsonp";
const marketParams =
  "iss.meta=off&iss.json=extended&lang=ru&security_collection=3&sort_column=VALTODAY&sort_order=desc";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(`${moexHost}${marketPath}?${marketParams}`)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        const { securities, marketdata } = mapBody(body);
        const result = mapTableData(securities, marketdata);
        setTableData(result);
      });
  }, [setTableData]);

  return <div className="App"></div>;
}

export default App;
