import "./appbar.scss";
import { GiBookAura } from "react-icons/gi";
import {
  AiOutlineMenu,
} from "react-icons/ai";
import {FaRegMoon} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { FiSun } from "react-icons/fi";
import { toggleTheme } from "../../../store/slices/themeSlice";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Add this line to import PropTypes

function AppBar({ open, setOpen }) {
  // ...
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
 
  return (
    <div className="appbar bg__accent ">
      <div className="left">
        {/* sidebar toggler */}
        <button
          className="btn__icon btn__hamburger text__color"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <AiOutlineMenu className="icon" />
        </button>

        {/* logo */}
        <Link to="/" className="logo text__primary">
          <GiBookAura className="logo__icon" />
          <span>AKGEC Library</span>
        </Link>
      </div>

      {/* righside icons and profile */}
      <div className="right">

      <button
            className="btn__icon text__color "
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {theme === "dark" ? <FaRegMoon /> : <FiSun />}
          </button>
      </div>
    </div>
  );
}

AppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default AppBar;
