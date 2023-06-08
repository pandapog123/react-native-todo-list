import { useState } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";

interface PropTypes {
  defaultValue?: boolean;
  handleChange: (checked: boolean) => void;
}

export default function CustomCheckbox({
  defaultValue,
  handleChange,
}: PropTypes) {
  const [checked, setChecked] = useState(defaultValue || false);

  function handleClick() {
    setChecked((previousValue) => !previousValue);

    handleChange(checked);
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <FontAwesomeIcon
        style={[
          styles.icon,
          (checked ? styles.iconSelected : styles.iconUnselected) as ViewStyle,
        ]}
        icon={checked ? faCheckSquare : faSquare}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 12,
    borderColor: "lightslategrey",
    borderWidth: 2,
    borderRadius: 8,
  },

  iconUnselected: {
    color: "white",
  },
  iconSelected: {
    color: "cyan",
  },
});
