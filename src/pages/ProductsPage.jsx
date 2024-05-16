import { useEffect, useState } from "react";
import Table from "../components/Datatable";
import { useProducts } from "../context/ProductsContext";

function ProductsPage() {
    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, [])

    // Estructura de la tabla
    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nameProduct,
            sortable: true,
        },
        {
            name: 'Cantidad',
            selector: row => row.cantProduct
        },
        {
            name: 'Precio $',
            selector: row => row.unitPrice,
        },
        {
            name: 'Ruta',
            selector: row => row.routes,
        },
        {
            name: 'Acciones',
            cell: row => (
                <div>
                    <button className='px-1 '>
                        Editar
                    </button>
                    <button className='px-1'>
                        Borrar
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];

    return (
        <>
            <h1 className="text-3xl font-semibold text-center py-4">Productos</h1>
            <div className="px-6">
                <Table
                    columns={columns}
                    data={products}
                />
            </div>
        </>
    );
}

export default ProductsPage;