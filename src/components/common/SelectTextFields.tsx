import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  defaultValueLabel: string;
  selectOptions: {
    value: string;
    label: string;
  }[];
  textFieldId: string;
};

export const SelectTextFields: FC<Props> = ({
  defaultValueLabel,
  selectOptions,
  textFieldId,
}) => {
  const [valueLabel, setValueLabel] = useState(defaultValueLabel);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValueLabel(event.target.value);
  };

  return (
    <TextField
      id={textFieldId}
      select
      label={textFieldId}
      value={valueLabel}
      onChange={handleChange}
      helperText={`Please select your ${textFieldId}`}
      name={textFieldId}
      aria-required="true"
    >
      {selectOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
