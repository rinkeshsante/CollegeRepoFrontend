import CsvDownload from "react-json-to-csv";

function getFileName(table_name) {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    table_name +
    " " +
    date +
    " at " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ".csv"
  );
}

export default {
  getFileName: getFileName,
};
