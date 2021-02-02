const form = document.querySelector("#searchForm")
form.addEventListener("submit", async e => {
    e.preventDefault()
    console.log("submitted")
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    makgImage(res.data)
    form.elements.query.value = ''
})

const makgImage = pictures => {
    for (let picture of pictures) {
        if (picture.show.image) {
        const img = document.createElement('IMG')
        img.src = picture.show.image.medium
        document.body.append(img)
        }
    }
}
