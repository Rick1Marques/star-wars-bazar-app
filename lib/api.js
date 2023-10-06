async function request({ url, method, data }) {
  const options = {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

export async function buyProtocol({ user_id, starship_id, ...data }) {
  return request({
    url: `/api/users/${user_id}/starships/${starship_id}`,
    method: "POST",
    data,
  });
}

export async function sellProtocol(
  starship_id,
  user_id,
  listing_id,
  { ...data }
) {
  return request({
    url: `/api/users/${user_id}/starships/${starship_id}/listings/${listing_id}`,
    method: "DELETE",
    data,
  });
}
