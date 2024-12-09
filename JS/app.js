let s = document.querySelector ('select')
let as = document.querySelectorAll ('article')
let container = document.querySelector ('.container')
s.addEventListener ('change', ()=> {
    for (const a of as) {
        if (s.value == a.dataset.type || s.value == "All") {
            a.style.display = 'grid'
        }
        else {
            a.style.display = 'none'
        }
    }
})
let price = false 
function sortPrice(event) {
    price = !price
    event.preventDefault()
    container.innerHTML = ''
    let selected = [...as].sort((b,c) => {
        return price ? b.dataset.price - c.dataset.price : c.dataset.price - b.dataset.price
    })
    for (const a of selected) {
        container.appendChild(a) 
    }
}
let country = false 
function sortCountry(event) {
    country = !country
    event.preventDefault()
    container.innerHTML = ''
    let selected = [...as].sort((d,e) => {
        return country ? d.dataset.country.localeCompare (e.dataset.country) : e.dataset.country.localeCompare (d.dataset.country)
    })
    for (const a of selected) {
        container.appendChild(a) 
    }
}
let nam = false 
function sortName(event) {
    nam = !nam
    event.preventDefault()
    container.innerHTML = ''
    let selected = [...as].sort((f,g) => {
        return nam ? f.dataset.name.localeCompare (g.dataset.name) : g.dataset.name.localeCompare (f.dataset.name)
    })
    for (const a of selected) {
        container.appendChild(a) 
    }
}
