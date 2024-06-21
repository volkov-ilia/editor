import React from "react"

export default function Table<tableType extends object>({
  headers,
  data,
}: {
  headers: Array<string>
  data: Array<tableType>
}) {
  return (
    <div className={"tableWrapper"}>
      <table className={"table table-striped flex-table"}>
        <thead key={`header`}>
          <tr>
            {headers.map((headerName, idx) => (
              <th key={`h-${headerName}-${idx}`}>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`r${rowIndex}`}>
              {headers.map((header, cellIndex) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                /* @ts-ignore */
                <td key={`r${rowIndex}-c${cellIndex}`}>{row?.[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .tableWrapper {
          height: 300px;
        }
        tbody tr:nth-child(even) {
          background: rgba(18, 182, 152, 0.2);
        }
        table thead tr {
          height: 2.5rem; /* Fixed Row Height */
          border-top: 1px solid black; /* Just to Highlight Top of Table */
          border-bottom: 1px solid black; /* Just to Highlight Top of Table */
          margin: 0.5rem 0;
          background: rgb(18, 182, 152);
          color: white;
        }
        table tbody tr {
          height: 2rem;
        }

        /* Flex Table */
        table.flex-table {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        table.flex-table thead,
        table.flex-table tbody {
          display: block;
        }
        table.flex-table thead {
          margin-right: 0;
        }
        table.flex-table tbody {
          flex: 1;
          overflow-y: scroll;
        }
        table.flex-table tr {
          width: 100%;
          display: flex;
        }
        table.flex-table tr td,
        table.flex-table tr th {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
