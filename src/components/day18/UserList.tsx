export default function UserList({records, loading}) {
    if ( loading ) {
        return <p>로딩중...</p>;
    }

    return (
      <ul>
          {
              records.map((record) => (
                  <li key={record.id}>
                      {record.name} ({record.email})
                  </li>
              ))
          }
      </ul>
    );
}