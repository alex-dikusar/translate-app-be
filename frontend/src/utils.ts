export const debounce = <T>(
  callback: (...args: T[]) => void,
  timer: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: T[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), timer);
  };
};
