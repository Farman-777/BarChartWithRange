const apiHitsData = [
    { gstrUrl: "api 1", urlHitCounts: "63214" },
    { gstrUrl: "api 2", urlHitCounts: "34109" },
    { gstrUrl: "api 3", urlHitCounts: "37258" },
    { gstrUrl: "api 4", urlHitCounts: "47852" },
    { gstrUrl: "api 5", urlHitCounts: "15786" },
    { gstrUrl: "api 6", urlHitCounts: "19870" },
    { gstrUrl: "api 7", urlHitCounts: "21587" },
    { gstrUrl: "api 8", urlHitCounts: "38943" },
    { gstrUrl: "api 9", urlHitCounts: "36500" },
    { gstrUrl: "api 10", urlHitCounts: "43127" },
    { gstrUrl: "api 11", urlHitCounts: "24128" },
    { gstrUrl: "api 12", urlHitCounts: "52580" },
    { gstrUrl: "api 13", urlHitCounts: "46097" },
    { gstrUrl: "api 14", urlHitCounts: "24258" },
    { gstrUrl: "api 15", urlHitCounts: "11527" },
    { gstrUrl: "api 16", urlHitCounts: "12345" },
    { gstrUrl: "api 17", urlHitCounts: "58965" },
    { gstrUrl: "api 18", urlHitCounts: "25274" },
    { gstrUrl: "api 19", urlHitCounts: "46321" },
    { gstrUrl: "api 20", urlHitCounts: "14785" },
    { gstrUrl: "api 21", urlHitCounts: "5274" },
    { gstrUrl: "api 22", urlHitCounts: "6321" },
    { gstrUrl: "api 23", urlHitCounts: "4785" },
    { gstrUrl: "api 24", urlHitCounts: "95274" },
    { gstrUrl: "api 25", urlHitCounts: "96321" },
    { gstrUrl: "api 26", urlHitCounts: "94785" },
    { gstrUrl: "api 27", urlHitCounts: "85274" },
    { gstrUrl: "api 28", urlHitCounts: "86321" },
    { gstrUrl: "api 29", urlHitCounts: "84785" },
    { gstrUrl: "api 28", urlHitCounts: "76321" },
    { gstrUrl: "api 29", urlHitCounts: "74785" },
  ];
  
  apiHitsData.sort((a, b) => b.urlHitCounts - a.urlHitCounts); //sorted
  console.log("apiHitsData", apiHitsData);
  const totalRecords = apiHitsData.length; //length generated
  const maxHits = apiHitsData[0].urlHitCounts; //first count selected
  console.log("maxHits : ", maxHits);
  const maxHitsLength = maxHits.toString().length;
  console.log("maxHitsLength : ", maxHitsLength);
  
  // Extract the first digit of the maxHits1 value
  const FD = Number(maxHits[0]);
  console.log("first digit : " + FD + " of : " + maxHits);
  
  //Creating subarray to store data separately
  const SubArrays = Array.from({ length: FD + 1 }, () => []);
  console.log("SubArrays : ", SubArrays);
  
  const ArrayRanges = [];
  
  // Populate the RangesArray with values
  let ten = 10;
  let l = 5;
  let t = 1;
  for (let i = 0; i < maxHitsLength - 1; i++) {
    if (l === 2) break;
    t = t * ten;
  }
  
  console.log("ten's value : ", t);
  for (let j = 0; j < FD; j++) {
    const rangesValue = (j + 1) * t;
    ArrayRanges.push(rangesValue);
  }
  
  console.log("Ranges of Array : ", ArrayRanges);
  
  //SubArrays with proper Ranges
  const NewSubRangesArray = Array.from({ length: FD + 1 }, () => []);
  console.log("NewSubRangesArray : ", NewSubRangesArray);
  
  // Set the ranges array for the chart
  NewSubRangesArray[0].push("upto", ArrayRanges[0]);
  // NewSubRangesArray[0].push(ArrayRanges[0]);
  
  for (let i = 1; i <= ArrayRanges.length - 1; i++) {
    NewSubRangesArray[i].push(ArrayRanges[i - 1], ArrayRanges[i]);
  }
  
  NewSubRangesArray[NewSubRangesArray.length - 1].push(
    ArrayRanges[ArrayRanges.length - 1],
    "above"
  );
  console.log("NewSubRangesArray : ", NewSubRangesArray);
  
  // Populate the SubArrays with hit counts according to their ranges
  for (let i = 0; i < totalRecords; i++) {
    const urlHitCounts = Number(apiHitsData[i].urlHitCounts);
    let index = ArrayRanges.length;
  
    for (let j = 0; j < ArrayRanges.length; j++) {
      if (urlHitCounts <= ArrayRanges[j]) {
        index = j;
        break;
      }
    }
    SubArrays[index].push(apiHitsData[i]);
  }
  console.log("SubArrays after pushing data : ", SubArrays);
  
  const SubArrayLengths = SubArrays.map((arr) => arr.length);
  console.log("subArrayLengths : ", SubArrayLengths);
  
  export { SubArrays, NewSubRangesArray, SubArrayLengths };
  