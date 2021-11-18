import useSWR from 'swr';
import cookie from 'js-cookie';
import { useState, useEffect, useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import NewEmpleado from '../newEmpleados'
import GlobalFilter from '../../../../lib/GlobalFilter';




export default function ListEmpleado({ shop_id }) {
    const [modal, setModal] = useState("");
    const [todos, setTodos] = useState([]);

    const getData = async () => {
        const response = await fetch(`https://abakoapi.herokuapp.com/api/user/shop/${shop_id}/employee`, {
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



    const columns = useMemo(
        () => [
            {
                Header: 'Nombre de Usuario',
                accessor: 'username', // accessor is the "key" in the data
            },
            {
                Header: 'Nombre',
                accessor: 'firstName',
            },
            {
                Header: 'Apellido',
                accessor: 'lastName',
            },
            {
                Header: 'Activo',
                accessor: 'active',
                Cell: ({ row: { original } }) => (
                    original.active === true ? 'Si' : 'No'
                )
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


    console.log(todos)
    return (<>


        <div className="">
            {shop_id ? <div className='grid grid-cols-2'>
                <div><button onClick={viewModal} className="p-4"> + Añadir</button></div>
                <div className='p-4 justify-self-end'> <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
                    setGlobalFilter={setGlobalFilter}
                    globalFilter={state.globalFilter}
                /></div>
            </div> : <div className='grid grid-cols-1'> <div className='p-4 justify-self-start'> <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                globalFilter={state.globalFilter}
            /></div></div>}
            {modal == "" ? (<></>) : (<NewEmpleado shop_id={shop_id} handleModal={handleModal} />)}


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

            <div className="pagination grid grid-cols-3 px-2">
                <div className="justify-self-start">
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
                </div>

                <div className="justify-self-center">
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
                </div>


                <div className="justify-self-end">
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



            </div>

            {/* <table className="items-center bg-transparent w-full border-collapse text-center">
                <thead>
                    <tr >
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Nombre de usuario
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Nombre
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Apellido
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Correo
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Activo
                        </th>

                    </tr>
                </thead>

                <tbody>



                    {




                        data && data.length > 0 ?


                            data.map(empleado => (


                                <tr key={empleado.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                        {empleado.username}
                                    </th>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                        {empleado.firstName}
                                    </th>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                        {empleado.lastName}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {empleado.email}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {empleado.active ? 'SI' : 'NO'}
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
