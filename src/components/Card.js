import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
  Typography,
} from "@mui/material";

const ProjectCard = ({ thumbnail, name, date, websiteUrl, gitHubUrl }) => {
  return (
    <Card sx={{ width: 345, margin: 5 }}>
      <CardMedia sx={{ height: 200 }} image={thumbnail} title={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">{date}</Typography>
      </CardContent>
      <CardActions>
        <Link href={websiteUrl} target="_blank" underline="none">
          Website
        </Link>
        <Link href={gitHubUrl} target="_blank" underline="none">
          GitHub
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
