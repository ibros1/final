
function openSide(){
const sideBar = document.querySelector('.sidebar')
sideBar.classList.remove('visibility:"hidden"')
sideBar.classList.remove('sm:hidden')
sideBar.classList.add('md:hidden')
sideBar.classList.remove('hidden')
}
function closeSide(){
const sideBar = document.querySelector('.sidebar')
sideBar.classList.add('visibility:"hidden"')
sideBar.classList.add('sm:hidden')
sideBar.classList.add('md:hidden')
sideBar.classList.add('hidden')
}