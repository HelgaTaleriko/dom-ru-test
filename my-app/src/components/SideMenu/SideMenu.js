import {Logo} from "./Logo/Logo";
import {List} from "./List/List";
import './SideMenu.css'

export const SideMenu = () => {
  return (
    <div className='side-menu'>
      <Logo/>
      <List/>
    </div>
  );
};
