export const filteringAnArray = (array, filterString) => {
  return array.filter((arrayElement) => {
    return arrayElement.name.toLowerCase().includes(filterString.toLowerCase());
  });
};

// what happening under the hood
// .filter function is used to filter the array
// function filteringAnArray2(array, filterCriteria) {
// 	let filteredArray = [];

// 	filteredArray = array.filter(function (arrayElement) {
// 		return arrayElement.name
// 			.toLowerCase()
// 			.includes(filterCriteria.toLowerCase());
// 	});

// 	return filteredArray;
// }
