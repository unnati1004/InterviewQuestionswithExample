const input = [
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 3",
    data: "Data1",
  },
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 2",
    data: "Data2",
  },
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 4",
    data: "Data1",
  },
];
let obj = {};
input.map((element)=>{
     if(obj[element.key]){
          obj[element.key].push(element);
     }else {
          obj[element["key"]]=[element];
     }
     return obj;
})
console.log(obj);

// Output

// {
//      'Sample 1': [
//        { key: 'Sample 1', data: 'Data1' },
//        { key: 'Sample 1', data: 'Data1' },
//        { key: 'Sample 1', data: 'Data1' }
//      ],
//      'Sample 3': [ { key: 'Sample 3', data: 'Data1' } ],
//      'Sample 2': [ { key: 'Sample 2', data: 'Data2' } ],
//      'Sample 4': [ { key: 'Sample 4', data: 'Data1' } ]
//    }