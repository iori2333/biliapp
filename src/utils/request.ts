export interface RequestOptions {
  method?: 'GET' | 'POST';
  params?: { [key: string]: unknown };
  data?: { [key: string]: unknown };
}

function jsonToQueryString(json: { [key: string]: unknown }) {
  return (
    '?' +
    Object.keys(json)
      .map(key => `${key}=${json[key]}`)
      .join('&')
  );
}

async function requestJson(url: string, options?: RequestOptions) {
  const query = options?.params ? jsonToQueryString(options.params) : '';
  return fetch(url + query, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: options?.method,
    body: options?.data ? JSON.stringify(options?.data) : undefined
  }).then(res => res.json());
}

export function get(url: string, options?: Omit<RequestOptions, 'data'>) {
  return requestJson(url, { ...options, method: 'GET' });
}

export function post(url: string, options?: RequestOptions) {
  return requestJson(url, { ...options, method: 'POST' });
}
