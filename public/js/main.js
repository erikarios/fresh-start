const exampleModal = document.getElementById('editJournal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    const title = document.getElementById('title')
    const body = document.getElementById('journalBody')
    // console.log(title.innerText)
    // console.log(body.innerText)
    const changeTitle = document.getElementById('journalTitle')
    const changeText = document.getElementById('journalText')
    changeTitle.value = title.innerText
    changeText.value = body.innerText
})