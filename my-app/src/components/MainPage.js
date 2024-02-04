import { useEffect, useState } from "react";
import { mapBody } from "../utils/mapBody";
import { mapTableData } from "../utils/mapTableData";
import { Main } from "./Main/Main";
import { SideMenu } from "./SideMenu/SideMenu";
import "./MainPage.css";
import {getResource} from "../utils/getResource";

const moexHost = "https://iss.moex.com/";
/** Получить данные по рынку */
const marketPath =
  "iss/engines/stock/markets/shares/boardgroups/57/securities.jsonp";
const marketParams =
  "iss.meta=off&iss.json=extended&lang=ru&security_collection=3&sort_column=VALTODAY&sort_order=desc";

export const MainPage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getResource(`${moexHost}${marketPath}?${marketParams}`)
      .then((body) => {
        const { securities, marketdata } = mapBody(body);
        const result = mapTableData(securities, marketdata);
        setTableData(result);
      })
      .catch((err) => {
        alert(err);
      });
  }, [setTableData]);

  return (
    <div className="main-page">
      <SideMenu />
      <Main tableData={tableData}  />
    </div>
  );
};
