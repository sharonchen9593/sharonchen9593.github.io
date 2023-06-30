import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { GitHub, LinkedIn, Topic, Email } from "@mui/icons-material";

const Navigation = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction
        label="GitHub"
        icon={<GitHub />}
        href="https://github.com/sharonchen9593"
        target="_blank"
      />
      <BottomNavigationAction
        label="LinkedIn"
        icon={<LinkedIn />}
        href="https://www.linkedin.com/in/sharonchen9593/"
        target="_blank"
      />
    </BottomNavigation>
  );
};

export default Navigation;
