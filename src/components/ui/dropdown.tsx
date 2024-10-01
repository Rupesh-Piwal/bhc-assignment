"use client";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import fax from "@/app/assets/openmoji_fax-machine_green.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const people = [
  { name: "TDM 1", image: fax },
  { name: "TDM 2", image: fax },
  { name: "TDM 3", image: fax },
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 300,
          background: "#ffffff",
          border: "none",
          outline: "none",
        }}
      >
        {/* Custom Input Label with centered image */}
        <InputLabel
          id="demo-multiple-name-label"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px", // optional for spacing
          }}
        >
          <Image
            className="centered-image bg-[#E7F9E9] rounded-[10] "
            src={fax}
            alt="tdm"
            width={30}
            height={30}
          />
          <p className="text-[#26323C] text-[15px] font-[400]">TDM 1</p>
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {people.map((person) => (
            <MenuItem
              key={person.name}
              value={person.name}
              style={getStyles(person.name, personName, theme)}
            >
              <ListItemIcon>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText primary={person.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
