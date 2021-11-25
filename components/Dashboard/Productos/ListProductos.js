import useSWR from 'swr';
import cookie from 'js-cookie';
import { useState, useEffect, useMemo } from 'react'
import NewProducto from '../Tiendas/newProducto';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import GlobalFilter from '../../../lib/GlobalFilter';
import PaginationTable from '../../../lib/PaginationTable';




export default function ListProductos({ shop_id }) {

    const [modal, setModal] = useState("");
    const [todos, setTodos] = useState([]);

    const getData = async () => {
        const response = await fetch(!shop_id ? `https://abakoapi.herokuapp.com/api/user/product` : `https://abakoapi.herokuapp.com/api/user/shop/${shop_id}/product`, {
            headers: { accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
            credentials: 'include'
        }
        );
        const data = await response.json();
        setTodos(data.data);
    };



    const viewModal = () => {
        setModal("true")
    }
    const handleModal = () => {
        setModal("")
    }
    const columns = useMemo(() => [], [])


    if (shop_id) {
        columns = useMemo(
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
                },
                {
                    Header: 'Precio Venta',
                    accessor: 'priceSell',
                },
                {
                    Header: 'Stock',
                    accessor: 'stock',
                },
            ],
            []
        )
    } else {
        columns = useMemo(
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
                },
                {
                    Header: 'Precio Venta',
                    accessor: 'priceSell',
                },
                {
                    Header: 'Stock',
                    accessor: 'stock',
                }, {
                    Header: 'Tienda',
                    accessor: 'shop.name'
                }
            ],
            []
        )
    }








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

            {shop_id ? <div className='grid md:grid-cols-2 grid-cols-1'>
                <div><button onClick={viewModal} className="p-4"> + Añadir</button></div>
                <div className='p-4 justify-self-end'> <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
                    setGlobalFilter={setGlobalFilter}
                    globalFilter={state.globalFilter}
                    rows={rows}
                /></div>
            </div> : <div className='grid grid-cols-1'> <div className='p-4 justify-self-start'> <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                globalFilter={state.globalFilter}
                rows={rows}
            /></div></div>}
            {modal == "" ? (<></>) : (<NewProducto shop_id={shop_id} handleModal={handleModal} />)}

            <div className='overflow-auto'>
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
            </div>
            <PaginationTable
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageOptions={pageOptions}
                pageCount={pageCount}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
                setPageSize={setPageSize}
                pageIndex={pageIndex}
                pageSize={pageSize}
            />


        </div>

    </>)
}
