import { theme } from "antd";
import { useState } from "react";
import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
  keyColumn,
} from "react-datasheet-grid";

// Import the style only once in your app!
import "react-datasheet-grid/dist/style.css";
import PageContainer from "../PageContainer";
import "./index.scss";

const { useToken } = theme;

const EditableDataSheetGrid = () => {
  const { token } = useToken();

  const [data, setData] = useState([
    { active: true, firstName: "Elon", lastName: "Musk" },
    { active: false, firstName: "Jeff", lastName: "Bezos" },
  ] as any[]);

  const columns = [
    { ...keyColumn("active", checkboxColumn), title: "Active" },
    { ...keyColumn("firstName", textColumn), title: "First name" },
    { ...keyColumn("lastName", textColumn), title: "Last name" },
  ];

  return (
    <PageContainer>
      <div className="testClass" style={{ borderColor: token.colorPrimary }}>
        <DataSheetGrid value={data} onChange={setData} columns={columns} />
      </div>
    </PageContainer>
  );
};
export default EditableDataSheetGrid;
