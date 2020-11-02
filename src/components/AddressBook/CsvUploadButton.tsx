import React, { FunctionComponent } from "react";
import { FilePlus } from "react-feather";
import { LabelWhiteSecondary } from "../UI/Button";

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
    <div className="tw-ml-2 tw-md-2">
      <input
        id="csv-file-input"
        type="file"
        name="file"
        onChange={handleUploadedFile}
        style={{ display: "none" }}
        accept=".csv"
      />
      <LabelWhiteSecondary htmlFor="csv-file-input">
        <div className="tw-flex tw-items-center tw-mx-0">
          <div className="tw-col-auto tw-mr-2">
            <FilePlus />
          </div>
          <div className="tw-col-auto">Import .csv</div>
        </div>
      </LabelWhiteSecondary>
    </div>
  );
};
