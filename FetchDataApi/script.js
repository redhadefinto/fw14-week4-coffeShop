const root = document.getElementById('root')

const fetchData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          if(!response.ok) {
            throw new Error('Network problem')
          } 
            return response.json()
        })
        .catch((e) => {
          throw new Error('Error fetching data', e)
        })
      };

const renderData = () => {
  fetchData()
  .then((users) => {
    users.forEach((user) => {
      const card = document.createElement('div')
      card.classList.add('card');
      root.appendChild(card)

      const cardDetail = document.createElement('div')
      cardDetail.classList.add('card-details')
      card.appendChild(cardDetail)

      const name = document.createElement('p')
      name.classList.add('name')
      name.innerHTML = `Name:  ${user.name}`
      cardDetail.appendChild(name)
      const email = document.createElement('p')
      email.classList.add('email')
      email.innerHTML = `Email: ${user.email}`
      cardDetail.appendChild(email)
      const phone = document.createElement('p')
      phone.classList.add('phone')
      phone.innerHTML = `Phone Number: ${user.phone}`
      cardDetail.appendChild(phone)
    })
  }).catch((e) => {
    console.log(e)
  })
}

renderData()