import { Dispatch, SetStateAction } from "react"
import axios from 'axios'


export type dataType = { id: string, name: string, email: string }[]
export const fetchUsers = async (cb: Dispatch<SetStateAction<dataType | null>>):Promise<dataType> => {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = users.data.map(user => {
    const { id, name, email } = user
    return { id, name, email}
  })
  cb(data)
  return data;
}