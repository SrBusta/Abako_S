import useSWR from 'swr';
import cookie from 'js-cookie';
import { useState, useEffect, useMemo } from 'react'
import NewProducto from '../Tiendas/newProducto';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import GlobalFilter from '../../../lib/GlobalFilter';
import PaginationTable from '../../../lib/PaginationTable';
import EditProductos from '../Productos/EditProductos'




export default function ListProductos({ shop_id }) {

    const [modal, setModal] = useState("");
    const [todos, setTodos] = useState([]);

    const [modalEdit,setModalEdit]= useState("");
    const [editar,setEditar]=useState([]);

    const getData = async () => {
        const response = await fetch(!shop_id ? `https://api.abako.xyz/api/user/product` : `https://api.abako.xyz/api/user/shop/${shop_id}/product`, {

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
        setModalEdit("")
    }

    const btnEdit=({data})=>{
        setEditar({data})
        setModalEdit('true')
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
                {
                    Header:'Id',
                    accessor:'id'
                    
                }
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

    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: "Edit",
                Header: "Editar",
                Cell: ({ row }) => (
                    <button onClick={()=>{btnEdit({data:row.values})}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                        </svg>
                    </button>
                ),
            },
        ]);
    };


    const productsData = useMemo(() => [...todos], [todos]);

    const intance = useTable({ columns, data: productsData, initialState: { pageIndex: 0, hiddenColumns:['id'] } }, useGlobalFilter, shop_id?tableHooks:'', useSortBy, usePagination)
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
    }, [modal,modalEdit])
 

    return (<>


        <div className="">
            

            {shop_id ? <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className="self-center"><button onClick={viewModal} className="pl-2 pr-3 border-r dark:border-prueba"> + Añadir</button></div>
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
            {modalEdit==""?(<></>):(<EditProductos editar={editar} handleModal={handleModal} shop_id={shop_id}/>)}

            <div className='overflow-auto'>
                <table {...getTableProps()} className="items-center bg-transparent w-full border-collapse text-center">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border dark:border-prueba border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
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
