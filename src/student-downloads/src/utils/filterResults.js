export default function (data, options) {
  const filteredData = data.filter((dataItem) => {
    if (options.type === 'all') {
      return dataItem.subject.value === options.subject;
    } else
      return (
        dataItem.type === options.type &&
        dataItem.subject.value === options.subject
      );
  });
  return filteredData;
}
