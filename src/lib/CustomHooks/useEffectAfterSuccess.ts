import { useEffect } from "react";

const useEffectAfterSuccess = (
  callback: () => void,
  dependency: boolean | undefined
) => {
  useEffect(() => {
    if (dependency) {
      callback();
    }
  }, [dependency]);
};

export default useEffectAfterSuccess;
