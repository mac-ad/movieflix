import { access_token } from "../statics/constants";

export const fetchOptions = (
  { method, body, token } = { method: "GET", body: null, token: null }
) => {
  const options = {
    method,
    headers: {
      accept: "application/json",
      "content-type": "application/json;charset=utf-8",
      authorization: `Bearer ${access_token}`,
    },
  };

  if (method) options.method = method;

  if (token) {
    options.headers.authorization = `Bearer ${token}`;
  }

  if (body) options.body = JSON.stringify(body);

  return options;
};

export const getReleaseYear = (date) => {
  if (!date) return "TBA";

  return new Date(date).getFullYear();
};

export const getReleaseDate = (date) => {
  if (!date) return "TBA";

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const getRuntime = (runtime) => {
  if (!runtime) return "TBA";

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) {
    return `${minutes}m`;
  } else if (minutes === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h ${minutes}m`;
  }
};

export const getRating = (rating) => {
  if (!rating) return "NR";

  if (rating.toFixed(1) % 1 === 0) {
    return rating.toFixed(0);
  } else {
    return rating.toFixed(1);
  }
};

export const removeDuplicates = (items) => {
  const uniqueIds = new Set();

  const cleanedItems = items
    .map((item) =>
      uniqueIds.has(item.id) ? null : (uniqueIds.add(item.id), item)
    )
    .filter(Boolean);

  return { cleanedItems };
};
