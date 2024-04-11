import { useRef, useEffect } from "react";

function usePrevious(value: number) {
  const ref = useRef<number>();
  useEffect(() => {
    ref.current = value;
  });
  console.log(ref.current);
  return ref.current;
}

export default usePrevious;
