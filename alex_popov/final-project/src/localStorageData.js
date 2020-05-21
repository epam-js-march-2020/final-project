export function loadData() {
    const users = localStorage.getItem('users');
    // console.log(JSON.parse(users)[0].apointmets )
    if (!users) {
        localStorage.setItem('users', JSON.stringify([]))
        console.log( 'users arr loaded in the LS' )
    }

    const appointments = localStorage.getItem('appointments');
    if (!appointments) {
        console.log('the list of appoinments created')
        const list = createList()
        console.log(list)
        localStorage.setItem('appointments', JSON.stringify(list))
    }
    // console.log( JSON.parse(localStorage.getItem('appointments')) )
}

function createClearDay() {
    const day = {};
    for (let i = 10; i < 21; i++) {
      day[i] = 0
    }
    return day;
  }
  
  function createList() {
    const list = []
    const now = new Date();
    for (let i = 1; i < 31; i++) {
      const day = {
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + i),
        appointments: createClearDay()
      }
      list.push(day)
    }
    return list
  }
  
  // function createList() {
  //   const list = []
  //   const now = new Date();
  //   for (let i = -1; i < 29; i++) {
  //     const day = {
  //       date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + i),
  //       appointments: createClearDay()
  //     }
  //     list.push(day)
  //   }
  //   return list
  // }


  
// function listChecker(list) {
//     const now = new Date();
//     const newList = []
  
//     list.forEach( (el) => {
//         if (el.date.getMonth() >= now.getMonth()) {
//             if ( (el.date.getMonth() >= now.getMonth() && el.date.getDate() >= now.getDate()) || el.date.getMonth() > now.getMonth())
//             newList.push(el)
//         }
//     })
//     return newList;
// }
  
// function listFiller(list) {
//     if (list.length < 30) {
//         const year = list[list.length - 1].date.getFullYear();
//         const month = list[list.length - 1].date.getMonth();
//         const date = list[list.length - 1].date.getDate();
    
//         for (let i = 1; list.length < 30; i++) {
            
//             const day = {
//             date: new Date(year, month, date + i),
//             appointments: createClearDay()
//             }
//             list.push(day);
//         }
//     }
// }