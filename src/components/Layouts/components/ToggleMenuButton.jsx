import { Burger } from '@mantine/core';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
const ToggleMenuButton = ({parentMethod, mobileOpened}) => {
  return (
    <Burger opened={mobileOpened} onClick={parentMethod} hiddenFrom="sm" size="sm"/>
  );
}

ToggleMenuButton.propTypes = {
  mobileOpened: PropTypes.bool,
  parentMethod: PropTypes.func,
}

export default ToggleMenuButton;