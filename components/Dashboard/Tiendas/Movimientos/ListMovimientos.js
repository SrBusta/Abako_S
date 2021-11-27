
import cookie from 'js-cookie';
import { useState, useEffect, useMemo } from 'react'
import NewMovimiento from './newMovimiento';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import GlobalFilter from '../../../../lib/GlobalFilter';
import PaginationTable from '../../../../lib/PaginationTable';

export default function ListMovimientos({ shop_id }) {

    const [modal, setModal] = useState("");
    const [todos, setTodos] = useState([]);

    const getData = async () => {
        const response = await fetch(!shop_id ? `https://api.abako.xyz/api/user/movement` : `https://api.abako.xyz/api/user/shop/${shop_id}/movement`, {
            credentials: 'include'
        }
        );
        const data = await response.json();
        setTodos(data.data);
    };


    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('/') + " " + [d.toLocaleTimeString()];

    }



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
                    accessor: 'product.type',
                },
                {
                    Header: 'Marca',
                    accessor: 'product.brand',
                },
                {
                    Header: 'Modelo',
                    accessor: 'product.model',
                },
                {
                    Header: 'Encargado',
                    accessor: 'createdBy.username',
                },
                {
                    Header: 'Fecha',
                    accessor: 'createdAt',
                    Cell: ({ row: { original } }) =>
                    (
                        formatDate(original.createdAt)
                    ),
                },
                {
                    Header: 'Cantidad',
                    accessor: 'quantity',
                },
                {
                    Header: '',
                    accessor: 'type',
                    Cell: ({ row: { original } }) => (

                        original.type === true ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>)

                    ),
                },

            ],
            []
        )
    } else {

        columns = useMemo(
            () => [
                {
                    Header: 'Tipo',
                    accessor: 'product.type',
                },
                {
                    Header: 'Marca',
                    accessor: 'product.brand',
                },
                {
                    Header: 'Modelo',
                    accessor: 'product.model',
                },
                {
                    Header: 'Encargado',
                    accessor: 'createdBy.username',
                },
                {
                    Header: 'Fecha',
                    accessor: 'createdAt',
                    Cell: ({ row: { original } }) =>
                    (
                        formatDate(original.createdAt)
                    ),
                },
                {
                    Header: 'Cantidad',
                    accessor: 'quantity',
                },
                {
                    Header: '',
                    accessor: 'type',
                    Cell: ({ row: { original } }) => (

                        original.type === true ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>)

                    ),
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

    return (<div className="">
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
        {modal == "" ? (<></>) : (<NewMovimiento shop_id={shop_id} handleModal={handleModal} />)}
        <div className="overflow-x-auto">
            <table {...getTableProps()} className="items-center bg-transparent w-full border-collapse text-center">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="px-6  align-middle border dark:border-prueba  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
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



    </div>)
};
