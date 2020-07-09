import React from 'react';
import PropTypes from 'prop-types';
import FormFile from 'react-bootstrap/FormFile';

interface IProps {
  FileTypes: any;
  handleChange: any;
}
const UploadFile = (props: IProps) => {
  return (
    <FormFile
      id="custom-file-translate-scss"
      label="Upload excel file"
      data-browse="Upload File"
      lang="en"
      custom
      accept={props.FileTypes}
      onChange={props.handleChange}
    />
  );
};

UploadFile.propTypes = {
  FileTypes: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default UploadFile;
