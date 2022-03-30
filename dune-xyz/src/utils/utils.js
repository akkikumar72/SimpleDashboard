export const formatDateTime = (dateTrunc) => {
  let dateTime = new Date(dateTrunc);
  const options = { month: "long", day: "numeric" };
  return dateTime.toLocaleDateString("en-US", options);
};
