import "./Header.css";
import {ButtonUpdate} from "./ButtonUpdate/ButtonUpdate";
import {HeaderTitle} from "./HeaderTitle/HeaderTitle";


export const Header = ({onUpdate}) => {
    return (
        <div className="header">
            <HeaderTitle/>
            <ButtonUpdate onUpdate={onUpdate}/>
        </div>
    );
};
