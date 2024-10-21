import { Textarea } from '@mantine/core';
import PropTypes from 'prop-types';

function CustomTextArea({parentMethod, label, placeHolder, radius, style}){
  
  return (
    <Textarea onChange={parentMethod} label={label} placeholder={placeHolder} radius={radius} styles={style}/>
  );
}

CustomTextArea.propTypes = {
  parentMethod: PropTypes.func,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  radius: PropTypes.string,
  style: PropTypes.object,
}

export default CustomTextArea;