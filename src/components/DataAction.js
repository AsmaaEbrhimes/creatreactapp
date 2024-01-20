import React from 'react';
import { Button } from "react-bootstrap";
const DataAction = ({ondeleteData,onviweData}) => {
    return (
    <>
    <div className="date-btn mt-2">
                    <Button onClick={ondeleteData} variant="success">مسح الكل</Button>
                    <Button onClick={onviweData} variant="success">عرض البيانات</Button>
                </div>
    </>
    )
}
export default DataAction;