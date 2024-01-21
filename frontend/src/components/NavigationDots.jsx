import { NavLink } from "react-router-dom";
const NavigationDots = ({ active }) => (
  <div className='app__navigation'>
    {["home", "about", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        <NavLink
          to={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
