import { useState } from 'react';
import users from './data/users';

const columns = [
  { label: 'ID', key: 'id' },
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' },
  { label: 'Occupation', key: 'occupation' },
];

function paginateUsers(usersList, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pageUsers = usersList.slice(start, end);
  const totalPages = Math.ceil(usersList.length / pageSize);
  return { pageUsers, totalPages };
}

export default function DataTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { totalPages, pageUsers } = paginateUsers(users, page, pageSize);

  return (
    <div className="p-4">
      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-100 text-black">
            {columns.map(({ label, key }) => (
              <th key={key} className="p-2 border">{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageUsers.map(({ id, name, age, occupation }) => (
            <tr key={id} className="border-t">
              <td className="p-2">{id}</td>
              <td className="p-2">{name}</td>
              <td className="p-2">{age}</td>
              <td className="p-2">{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <select
          className="border p-1 text-sm"
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1);
          }}
        >
          {[5, 10, 20].map((size) => (
            <option className='text-black' key={size} value={size}>Show {size}</option>
          ))}
        </select>

        <div className="flex items-center gap-2 text-sm">
          <button
            className="px-2 py-1 border rounded disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <span>Page {page} of {totalPages}</span>
          <button
            className="px-2 py-1 border rounded disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
