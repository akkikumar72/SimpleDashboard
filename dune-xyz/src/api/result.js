import { useQuery } from "react-query";
const result1 = "../result1.json";
const result2 = "../result2.json";

const randomlySelectResultFromParams = () => {
  const random = Math.random();
  if (random < 0.5) {
    return result1;
  } else {
    return result2;
  }
};

export const useFetchResult = () => {
  return useQuery(["result", randomlySelectResultFromParams()], async () => {
    const response = await fetch(randomlySelectResultFromParams());
    return await response.json();
  });
};
