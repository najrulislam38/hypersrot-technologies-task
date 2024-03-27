import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="w-[1200px] mx-auto">{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};