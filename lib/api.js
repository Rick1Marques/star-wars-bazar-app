async function request({ data, url, method }) {
  const options = data
    ? {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    : { method };
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
export async function createListing(data) {
  return request({ url: "/api/listings", method: "POST", data });
}

export async function updateListing({ id, ...data }) {
  return request({ url: `/api/listings/${id}`, method: "PUT", data });
}
export async function deleteListing(id) {
  return request({ url: `/api/listings/${id}`, method: "DELETE" });
}

// export async function getListing(id) {
//   return request({ url: `/api/listings/${id}`, method: "GET" });
// }
