import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import Cart from '@/views/Cart.vue'

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

it('Mock BackEnd API', async () => {
  axios.get.mockResolvedValue([
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

  shallowMount(Cart)
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/cart/getCart')
  var result = await axios.get('http://localhost:3000/cart/getCart').catch(error => { throw error})
  expect(result).toEqual(apiDatas)
})