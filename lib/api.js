async function request({ url, method }) {
  const response = await fetch(url, { method });
  const json = await response.json();
  return json;
}

export async function buyProtocol({ user_id, starship_id }) {
  return request({
    url: `/api/users/${user_id}/starships/${starship_id}`,
    method: "POST",
  });
}

export async function sellProtocol({ user_id, starship_id, listing_id }) {
  return request({
    url: `/api/users/${user_id}/starships/${starship_id}/listings/${listing_id}`,
    method: "DELETE",
  });
}
