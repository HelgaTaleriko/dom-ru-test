import "./Main.css";
import {Table} from "./Table/Table";
import {Header} from "./Header/Header";

export const Main = ({tableData, onUpdate}) => {
    return (
        <div className="main">
            <Header onUpdate={onUpdate}/>
            <Table tableData={tableData}/>
        </div>
    );
};
