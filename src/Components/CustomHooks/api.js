export async function getProd(id) {
  const res = await fetch(`/api/courses/${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw {
      error: "Problem getting info",
    };
  }
  return data.courses;
}
