import React, { useRef } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onsubmit: null,
};

function PostFiltersForm(props) {
  const { onsubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);

    if (!onsubmit) return;

    const formValue = {
      searchTerm: e.target.value,
    };
    onSubmit(formValue);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </form>
    </div>
  );
}

export default PostFiltersForm;
