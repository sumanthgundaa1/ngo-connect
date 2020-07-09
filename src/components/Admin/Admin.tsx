import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UploadFile from '../Controls/UploadFile';
import xlsx from 'xlsx';

/* list of supported file types */
const SupportedFileTypes = ['xlsx', 'xlsb', 'xlsm', 'xls']
  .map((x) => {
    return '.' + x;
  })
  .join(',');

class Admin extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {loading: false};
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFile(file) {
    this.setState({loading: true});
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e && e.target && e.target.result;
      const wb = xlsx.read(bstr, {
        type: rABS ? 'binary' : 'array',
        cellDates: true,
        cellNF: false,
        cellText: false,
        dateNF: 'YYYY-MM-DD',
      });

      const inputData = wb.SheetNames.map((sheetName) => {
        const sData = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], {
          // @shiju - commenting out the line below as it was throwing a type error,
          // it seems that type of "cellDates" argument doesn't exist on the method
          // cellDates: true,
          dateNF: 'YYYY-MM-DD',
        });
        return {
          name: sheetName,
          data: sData,
        };
      });

      console.log('To be processed inputData: ', inputData);
    };
  }

  handleChange(e) {
    const files = e.target.files;
    console.log('Uploaded files:', files);
    if (files && files[0]) this.handleFile(files[0]);
  }

  render() {
    return (
      <div className="m-2 col-md-6 float-right">
        <UploadFile FileTypes={SupportedFileTypes} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default withRouter(Admin);
