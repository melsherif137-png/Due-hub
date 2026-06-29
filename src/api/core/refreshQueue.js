let isRefreshing = false;
let queue = [];

export function getIsRefreshing() {
  return isRefreshing;
}

export function setRefreshing(value) {
  isRefreshing = value;
}

export function subscribe(callback) {
  queue.push(callback);
}

export function resolveQueue(token) {
  queue.forEach((callback) => callback({ ok: true, token }));
  queue = [];
}

export function rejectQueue(error) {
  queue.forEach((callback) => callback({ ok: false, error }));
  queue = [];
}

export function clearQueue() {
  queue = [];
}
