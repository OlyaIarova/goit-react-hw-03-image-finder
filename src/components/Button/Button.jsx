import PropTypes from "prop-types";
import { LoadMoreBtn } from './Button.styled';

export  const Button = ({ onClick }) => {
  return (
    <div>
      <LoadMoreBtn type="button" onClick={onClick}>
        Load more
      </LoadMoreBtn>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;