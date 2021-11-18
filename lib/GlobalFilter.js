import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export default function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {

    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 300);
  
    return (
      <div className="flex mx-2">
        <div className='mx-2'>Filtrar: </div>
        <input className='border-b-2'
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} resultados...`}
        />
      </div>
    );
  }