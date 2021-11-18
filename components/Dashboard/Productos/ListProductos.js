import useSWR from 'swr';
import cookie from 'js-cookie';
import { useState, useEffect } from 'react'
import NewProducto from '../Tiendas/newProducto';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { useMemo } from 'react';
import GlobalFilter from '../../../lib/GlobalFilter';




export default function ListProductos({ shop_id }) {

    const [modal, setModal] = useState("");
    const [todos, setTodos] = useState([]);

    const getData = async () => {
        const response = await fetch(!shop_id ? `http://159.223.97.216/api/user/product` : `http://159.223.97.216/api/user/shop/${shop_id}/product`, {
            headers: { accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
            credentials: 'include'
        }
        );
        const data = await response.json();
        setTodos(data.data);
    };

    // const fetcher = (url) => {

    //     return fetch(url, {
    //         headers: { accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
    //         credentials: 'include'
    //     })
    //         .then(res => res.json())
    //         .then(json => json.data);

    // }


    // const { data, error, mutate } = useSWR(!shop_id ? `http://159.223.97.216/api/user/product` : `http://159.223.97.216/api/user/shop/${shop_id}/product`, fetcher);



    // console.log(data)


    const viewModal = () => {
        setModal("true")
    }
    const handleModal = () => {
        setModal("")
    }




    const columns = useMemo(
        () => [
            {
                Header: 'Tipo',
                accessor: 'type', // accessor is the "key" in the data
            },
            {
                Header: 'Marca',
                accessor: 'brand',
            },
            {
                Header: 'Modelo',
                accessor: 'model',
            },
            {
                Header: 'Precio Compra',
                accessor: 'priceBuy',
            }, {
                Header: 'Precio Venta',
                accessor: 'priceSell',
            }, {
                Header: 'Stock',
                accessor: 'stock',
            },
        ],
        []
    )





    const productsData = useMemo(() => [...todos], [todos]);

    const intance = useTable({ columns, data: productsData, initialState: { pageIndex: 0 } }, useGlobalFilter, useSortBy, usePagination)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        state,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = intance


    useEffect(() => {
        getData();
    }, [modal])

 
    return (<>


        <div className="">
            {shop_id ? <button onClick={viewModal} className="p-4 "> + Añadir</button> : <></>}
            {modal == "" ? (<></>) : (<NewProducto shop_id={shop_id} handleModal={handleModal} />)}
            <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                globalFilter={state.globalFilter}
            />
            <table {...getTableProps()} className="items-center bg-transparent w-full border-collapse text-center">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? "▼"
                                                : '▲'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 "
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Pagina{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    Ir a la pag.:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Mostrar {pageSize}
                        </option>
                    ))}
                </select>
            </div>

            {/* <table className="items-center bg-transparent w-full border-collapse text-center">
                <thead>
                    <tr >
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Tipo
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Marca
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Modelo
                        </th>

                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Precio compra
                        </th>

                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Precio venta
                        </th>

                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Stock
                        </th>

                    </tr>
                </thead>

                <tbody>



                    {
                        data && data.length > 0 ?


                            data.map(product => (


                                <tr key={product.id}>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                        {product.type}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {product.brand}
                                    </td>
                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.model}
                                    </td>

                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.priceBuy}
                                    </td>

                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.priceSell}
                                    </td>

                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.stock}
                                    </td>

                                </tr>


                            ))
                            :
                            <tr colSpan="10">

                                <th colSpan="10" className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                    NO HAY PRODUCTOS
                                </th>

                            </tr>





                    }


                </tbody>

            </table> */}


        </div>

    </>)
}
