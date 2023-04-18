const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

const User = async ({ params }) => {
  const data = await getUser(params.id);
  return (
    <main className="row">
      <section className="col-md-6 offset-md-3">
        <article className="card">
          <picture className="card-header text-center">
            <img
              src={data.avatar}
              alt={`photo of ${data.first_name} ${data.last_name}`}
              title={`photo of ${data.first_name} ${data.last_name}`}
            />
          </picture>
          <div className="card-body text-center">
            <h2>
              {data.first_name} {data.last_name}
            </h2>
            <strong>{data.email}</strong>
          </div>
        </article>
      </section>
    </main>
  );
};
export default User;
