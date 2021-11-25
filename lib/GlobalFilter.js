import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export default function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    rows
  }) {

    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 300);
    
    return (
      <div className="flex mx-2">
        <div className='mx-2'>Filtrar: </div>
        <input className='border-b-2 focus:outline-none'
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} resultados...`}
        />
        {/* {count===rows.length?<div></div>:<div className='text-gray-400'>{` - ${rows.length} resultados`}</div>} */}
      </div>
    );
  }