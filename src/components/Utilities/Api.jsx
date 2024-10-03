export default async function api(path, method, body, token) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${path}`, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData = await response.json();
  return responseData;
}
