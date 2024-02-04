import "./Header.css";
import {ButtonUpdate} from "./ButtonUpdate/ButtonUpdate";
import {HeaderTitle} from "./HeaderTitle/HeaderTitle";


export const Header = ({Tbody}) => {
    return (
        <div className="header">
            <HeaderTitle/>
            <ButtonUpdate tableData={Tbody}/>
        </div>
    );
};
