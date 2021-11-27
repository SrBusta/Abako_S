import useSWR from 'swr';
import cookie from 'js-cookie';
import { useState, useEffect, useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import NewEmpleado from '../newEmpleados'
import GlobalFilter from '../../../../lib/GlobalFilter';
import PaginationTable from '../../../../lib/PaginationTable';




export default function ListEmpleado({ shop_id }) {
    const [modal, setModal] = useState("");
    const [todos, setTodos] = useState([]);

    const getData = async () => {
        const response = await fetch(`https://api.abako.xyz/api/user/shop/${shop_id}/employee`, {

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
            {modal == "" ? (<></>) : (<NewEmpleado shop_id={shop_id} handleModal={handleModal} />)}

            <div className='overflow-auto'>
                <table {...getTableProps()} className="items-center bg-transparent w-full border-collapse text-center">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="px-6 bg-blueGray-50 text-blueGray-500  dark:border-prueba align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
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
