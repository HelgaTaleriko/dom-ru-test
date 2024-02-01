import "./Main.css";
import { Table } from "./Table/Table";
import { Header } from "./Header/Header";

export const Main = ({ tableData }) => {
  return (
    <div className="main">
      <Header />
      <Table tableData={tableData} />
    </div>
  );
};
