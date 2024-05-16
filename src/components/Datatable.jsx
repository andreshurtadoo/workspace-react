import DataTable from 'react-data-table-component';

function Table({ columns, data }) {
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
            />
        </div>
    );
}

export default Table;