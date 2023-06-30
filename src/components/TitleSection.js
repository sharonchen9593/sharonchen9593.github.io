import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TitleSection = () => {
  return (
    <section className="title-section">
      <h1>Sharon Chen</h1>
      <h3>
        Self-taught software engineer with a passion for frontend development
      </h3>
      <div className="arrow-down">
        <KeyboardArrowDownIcon fontSize="inherit" />
      </div>
    </section>
  );
};

export default TitleSection;
