import "./Table.css";
import {Thead} from "./Thead/Thead";
import {Tbody} from "./Tbody/Tbody";

export const Table = ({tableData}) => {
  return (
    <table className="table">
      <Thead/>
      <Tbody tableData={tableData}/>
    </table>
  );
};
