// TabComponent.tsx
import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Theme } from "@mui/material/styles"; // Import Theme type

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#3767B1", // Underline color for active tab
  },
});

// Define the props for StyledTab, including theme
interface StyledTabProps {
  label: string;
  theme?: Theme; // Optional theme prop for styled components
}

// Define props for the TabComponent, including onChange
interface TabComponentProps {
  onChange: (newValue: number) => void; // Define the onChange prop
}

const StyledTab = styled(({ label, ...other }: StyledTabProps) => (
  <Tab {...other} label={label} />
))(({ theme }) => ({
  textTransform: "none", // Avoid uppercase by default
  "&.Mui-selected": {
    color: "#3767B1", // Color for active tab
  },
}));

const TabComponent: React.FC<TabComponentProps> = ({ onChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(newValue); // Call the parent onChange function
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
