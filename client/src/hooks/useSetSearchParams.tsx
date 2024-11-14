import { useSearchParams } from "react-router-dom";

const useSetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (params: Record<string, string | undefined>) => {
    const currentParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        currentParams.set(key, value);
      } else {
        currentParams.delete(key);
      }
    });

    setSearchParams(currentParams);
  };

  return { searchParams, updateSearchParams };
};

export default useSetSearchParams;