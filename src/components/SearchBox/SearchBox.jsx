import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const safeValue = typeof value === "string" ? value : "";

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name:
      </label>
      <input
        id="search"
        type="text"
        className={styles.input}
        value={safeValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string, 
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;