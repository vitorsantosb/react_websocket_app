import { Button } from "@mantine/core";
import PropTypes from "prop-types";

function CustomBotton({parentMethod, label, style = {}}) {
  return (
    <Button style={style} onClick={parentMethod}>
      {label}
    </Button>
  );
}

CustomBotton.propTypes = {
  parentMethod: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.object,
}

export default CustomBotton;