import { People } from '~/types'
export const getAllPeople = async () => {
	const API_URL = String(import.meta.env.VITE_API_URL)
	const res = await fetch(`${API_URL}/people`)
	const data: People[] = await res.json()
	return data
}

export const getPeopleById = async (id: number) => {
	const API_URL = String(import.meta.env.VITE_API_URL)
	const res = await fetch(`${API_URL}/people/${id}`)
	const data: People = await res.json()
	return data
}
