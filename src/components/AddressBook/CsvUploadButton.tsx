import React, { FunctionComponent } from "react";
import { FilePlus } from "react-feather";
import { Button } from "../UI/Button";

interface CsvUploadButtonProps {
  handleLocalAddressBookCsv: (csvFile: File) => Promise<void>;
}

export const CsvUploadButton: FunctionComponent<CsvUploadButtonProps> = ({ handleLocalAddressBookCsv }) => {
  const handleUploadedFile = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    try {
      const csvFile = event.target.files && event.target.files[0];
      if (!csvFile) throw new Error("No file selected");
      handleLocalAddressBookCsv(csvFile);
    } catch (e) {
      alert(e.message || e);
    }
  };
  return (
    <div className="my-auto ml-md-2">
      <input
        id="csv-file-input"
        type="file"
        name="file"
        onChange={handleUploadedFile}
        style={{ display: "none" }}
        accept=".csv"
      />
      <Button>
        <div className="row align-items-center no-gutters">
          <div className="col-auto mr-2">
            <FilePlus />
          </div>
          <div className="col-auto">Import .csv</div>
        </div>
      </Button>
    </div>
  );
};
