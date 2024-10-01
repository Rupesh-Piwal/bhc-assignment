import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Theme } from "@mui/material/styles"; 

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#3767B1", 
  },
});

interface StyledTabProps {
  label: string;
  theme?: Theme; 
}


interface TabComponentProps {
  onChange: (newValue: number) => void;
}

const StyledTab = styled(({ label, ...other }: StyledTabProps) => (
  <Tab {...other} label={label} />
))(({ theme }) => ({
  textTransform: "none", 
  "&.Mui-selected": {
    color: "#3767B1", 
  },
}));

const TabComponent: React.FC<TabComponentProps> = ({ onChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(newValue); 
  };

  return (
    <Box sx={{ width: "70%", bgcolor: "background.paper" }}>
      <StyledTabs value={value} onChange={handleChange} centered>
        <StyledTab label="TDM" />
        <StyledTab label="TDM Beneficiaries" />
        <StyledTab label="Homecare Services" />
        <StyledTab label="TDM Transactions" />
      </StyledTabs>
    </Box>
  );
};

export default TabComponent;
