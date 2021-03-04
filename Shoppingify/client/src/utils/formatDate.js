function formatDate(date) {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

export default formatDate;
