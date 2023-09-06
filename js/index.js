const phoneAPI = async (inputText = '13') => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
  const data = await res.json()
  const phones = data.data
  displayPhone(phones)
}
const displayPhone = (phones) => {
  const divContainer = document.getElementById('div-container')
  divContainer.textContent = ''
  phones.forEach(phone => {
    // console.log(phone)
    const crateDiv = document.createElement('div')
    crateDiv.classList = (`card w-80 bg-base-100 shadow-xl`)
    crateDiv.innerHTML = `
        <figure class="px-10 pt-10">
                          <img src="${phone.image}" />
                        </figure>
                        <div class="card-body items-center text-center">
                          <h2 class="card-title">${phone.brand}</h2>
                          <p>${phone.phone_name}</p>
                          <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
        `

    divContainer.appendChild(crateDiv)
  })

}
const search = () => {
  const inputField = document.getElementById('input-field')
  const inputText = inputField.value
  inputField.value = ''
  phoneAPI(inputText)

}
phoneAPI()