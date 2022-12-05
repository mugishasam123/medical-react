import "./NavBar.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdSearch } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="container-cont">
      <HiOutlineMenuAlt1 className="contact-icon" />
      <h2 className="contact-title">Contacts</h2>
      <MdSearch className="contact-icon" />
    </div>
  );
};

export default NavBar;
