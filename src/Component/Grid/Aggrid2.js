import { React, useState, useEffect, Component } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const Aggrid2 = () => {
    const [col, setcol] = useState([
        { field: "albumId", filter: 'agNumberColumnFilter' },
        { field: "title", filter: true, sortable: true },
        { field: "url" },
        { field: "thumbnailUrl" }
    ]);
    const [row, setrow] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(r => r.json())
            .then(r => { setrow(r) })
    }, []);
    return (
        <div className="ag-theme-alpine" style={{ width: 900, height: 600 }}>
            <AgGridReact rowData={row} columnDefs={col} ></AgGridReact>
        </div>
    );
}



// class Aggrid22 {
//     init(params) {
//         const rainPerTenMm = params.value / 10;
//         this.eGui = params(rainPerTenMm, params.url);
//     }
//     getGui() {
//         return this.eGui;
//     }
// }


export default Aggrid2;
