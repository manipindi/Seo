import useSWR from "swr";

export function usePhotos() {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/photos`,
    fetcher
  );

  return {
    photos: data,
    isLoading,
    isError: error,
  };
}
