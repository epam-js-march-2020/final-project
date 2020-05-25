export function loadData() {
    const users = localStorage.getItem('users');

    if (!users) {
        const startValue = [{
          code: '',
          id: 1,
          name: 'Den',
          pass: '77777',
          phone: '7777777777',
          appointments: [],
          admin: true
        }]
        localStorage.setItem('users', JSON.stringify(startValue));
        console.log( 'users data was loaded in the LS' )
    }

    const appointments = localStorage.getItem('appointments');
    if (!appointments) {
        console.log('the list of appoinments created')
        const list = createList()
        localStorage.setItem('appointments', JSON.stringify(list))
    } else {
      const data = JSON.parse(appointments);
      const firstDay = new Date(data[0].date)
      const now = new Date()
      if ( firstDay.getDate() !== (now.getDate() +1) ) {
        console.log('the schedule datat have been apdated')

        const newData = listFiller( listChecker(JSON.parse(appointments)) );
        localStorage.setItem('appointments', JSON.stringify(newData))
      }
    }
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

function listFiller(list) {
    if (list.length < 30) {
        const last = new Date( list[list.length - 1].date )
        const year = last.getFullYear();
        const month = last.getMonth();
        const date = last.getDate();
    
        for (let i = 1; list.length < 30; i++) {
            
            const day = {
            date: new Date(year, month, date + i),
            appointments: createClearDay()
            }
            list.push(day);
        }
    }
    return list;
}

function listChecker(list) {
    const now = new Date();
    const newList = []
  
    list.forEach( (el) => {
      const date = new Date( el.date);
      // console.log( date )
      if (date.getMonth() >= now.getMonth() && date.getFullYear() >= now.getFullYear()) {
        if ( date.getDate() > now.getDate() || date.getMonth() > now.getMonth() || date.getFullYear() > now.getFullYear())
        newList.push(el)
      }
    })
    return newList;
}