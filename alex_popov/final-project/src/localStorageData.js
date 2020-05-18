export function loadData() {
    const users = localStorage.getItem('users');
    // console.log(JSON.parse(users)[0].apointmets )
    if (!users) {
        localStorage.setItem('users', JSON.stringify([]))
        console.log( 'users arr loaded in the LS' )
    }
}