import { React, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const Aggrid1 = () => {
    const [column, setcolumn] = useState([
        { field: "postId", filter: 'agNumberColumnFilter' },
        { field: "name", filter: true, sortable: true },
        { field: "email", filter: true },
        { field: "body", filter: true }
    ]);
    const [row, setrow] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(r => r.json())
            .then(r => {
                setrow(r)
            })
    }, []);

    return (

        <div className="ag-theme-alpine" style={{ width: 900, height: 600 }}>
            <AgGridReact rowData={row} columnDefs={column}></AgGridReact>
        </div>

    );
}

export default Aggrid1;
