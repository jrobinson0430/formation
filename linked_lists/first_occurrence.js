function firstIndexInLL(node, target) {
  const current = node;
  let count = 0

  while (current) {
    if (current.value === target) return count;
    count += 1
    current = current.next;
  }

  return - 1
}