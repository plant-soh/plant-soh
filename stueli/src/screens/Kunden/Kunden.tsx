import { useState } from 'react';
import Link from '../../components/Link';
import {
  Anlage,
  Role,
  useCreateAnlageMutation,
  useDeleteAnlageMutation,
  // useDeleteAnlagePrimaryMutation,
  useListAnlagesQuery,
} from '../../lib/react-api';
import { useAuth } from '../../providers/AuthProvider';

function nameof<T>(key: keyof T): keyof T {
  return key;
}

const Kunden = () => {
  const { role } = useAuth();

  const isAdmin = role === Role.Admin;

  let columns = {
    [nameof<Anlage>('firma')]: 'Firma',
    [nameof<Anlage>('standort')]: 'Standort',
    [nameof<Anlage>('anschrift')]: 'Anchrift',
  };

  if (isAdmin) {
    columns = { ...columns, actions: 'Aktionen' };
  }

  const { data, isLoading, refetch } = useListAnlagesQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const deleteAnlage = useDeleteAnlageMutation();
  const createAnlage = useCreateAnlageMutation();

  const [newAnlage, setNewAnlage] = useState<
    | {
        firma?: string;
        standort?: string;
        anschrift?: string;
      }
    | undefined
  >(undefined);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative flex flex-col w-full h-full gap-6 pb-10 m-6 -mb-6"
      data-testid="kunden"
    >
      <h1 className="flex text-xl font-semibold">Kunden</h1>
      <table className="mt-4">
        <thead>
          <tr>
            {Object.keys(columns).map((col, index) => (
              <th
                scope="col"
                className="relative p-3 text-xs font-semibold text-left text-white whitespace-pre-line align-top bg-bblue-500"
                key={index}
              >
                {columns[col]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-50" data-testid="recent-calls-table-body">
          {data?.listAnlages?.items?.map(
            (anlage, row_index) =>
              anlage && (
                <tr key={row_index} className="border-b border-gray-400">
                  {Object.keys(columns).map((col, index) => (
                    <td
                      key={index}
                      className="p-3 text-left whitespace-pre-line"
                    >
                      {col === 'actions' ? (
                        <button
                          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                          onClick={async () => {
                            await deleteAnlage.mutateAsync({
                              input: {
                                id: anlage?.id,
                              },
                            });
                            await refetch();
                          }}
                        >
                          <span>L??schen</span>
                        </button>
                      ) : col === 'standort' ? (
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                          <Link
                            name="referenz-stueli"
                            to={`/kunden/${anlage.id}`}
                          >
                            <span>{anlage[col]}</span>
                          </Link>
                        </button>
                      ) : (
                        anlage[col as 'firma' | 'anschrift']
                      )}
                    </td>
                  ))}
                </tr>
              ),
          )}
          {isAdmin && (
            <tr key="insert_row" className="border-b border-gray-400">
              <td
                key="firma_insert"
                className="p-3 text-left whitespace-pre-line"
              >
                <input
                  className="border-2 border-black"
                  type="text"
                  id="firma"
                  name="firma"
                  onChange={(e) =>
                    setNewAnlage({ ...newAnlage, firma: e.target.value })
                  }
                />
              </td>
              <td
                key="standort_insert"
                className="p-3 text-left whitespace-pre-line"
              >
                <input
                  className="border-2 border-black"
                  type="text"
                  id="standort"
                  name="standort"
                  onChange={(e) =>
                    setNewAnlage({ ...newAnlage, standort: e.target.value })
                  }
                />
              </td>
              <td
                key="anschrift_insert"
                className="p-3 text-left whitespace-pre-line"
              >
                <input
                  className="border-2 border-black"
                  type="text"
                  id="anschrift"
                  name="firma"
                  onChange={(e) =>
                    setNewAnlage({ ...newAnlage, anschrift: e.target.value })
                  }
                />
              </td>
              <td key="action" className="p-3 text-left whitespace-pre-line">
                {!newAnlage?.firma || !newAnlage?.standort ? (
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded opacity-50 cursor-not-allowed">
                    <span>Einf??gen</span>
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={async () => {
                      if (!newAnlage?.firma || !newAnlage?.standort) {
                        console.debug('newAnlage missing');
                        return;
                      }
                      await createAnlage.mutateAsync({
                        input: {
                          firma: newAnlage.firma,
                          standort: newAnlage.standort,
                          anschrift: newAnlage.anschrift,
                        },
                      });
                      await refetch();
                    }}
                  >
                    <span>Einf??gen</span>
                  </button>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Kunden;
