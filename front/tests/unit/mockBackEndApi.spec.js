import { mount } from '@vue/test-utils'
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
  try{
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
        mount(Cart)
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/cart/getCart')
        var result = axios.get('http://localhost:3000/cart/getCart').catch(error => { throw error})
        expect(result).toEqual(apiDatas)
      })


  }
  catch(err) {
    console.log(err)
  }
})