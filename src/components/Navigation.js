import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { GitHub, LinkedIn, Topic, Email } from "@mui/icons-material";

const Navigation = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="GitHub" icon={<GitHub />} />
      <BottomNavigationAction label="LinkedIn" icon={<LinkedIn />} />
      <BottomNavigationAction label="Projects" icon={<Topic />} />
      <BottomNavigationAction label="Contact Me" icon={<Email />} />
    </BottomNavigation>
  );
};

export default Navigation;
