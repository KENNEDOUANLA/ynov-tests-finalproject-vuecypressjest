import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import Home from '@/views/Home.vue'

jest.mock('axios')

var  apiDatas = [
  {
    id: 1,
    name: "Rick Sanchez",
    quantity: '10'
  },
  {
    id: 2,
    name: "Morty Smith",
    quantity: '15'
  }
]

it('Mock Rick & Morty API', async () => {
  try {
    axios.get.mockResolvedValue(
      [
        {
          id: 1,
          name: "Rick Sanchez",
          quantity: '10'
        },
        {
          id: 2,
          name: "Morty Smith",
          quantity: '15'
        }
      ])
      .then( () => {
        mount(Home)
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character')
        var result = axios.get('https://rickandmortyapi.com/api/character').catch(error => { throw error})
        expect(result).toEqual(apiDatas)
      })

  }
  catch(err) {
    console.log(err)
  }
})