import { Film } from '~/types'
export const getAllFilms = async () => {
	const API_URL = String(import.meta.env.VITE_API_URL)
	const res = await fetch(`${API_URL}/films`)
	const data: Film[] = await res.json()
	return data
}

export const getFilmById = async (id: number) => {
	const API_URL = String(import.meta.env.VITE_API_URL)
	const res = await fetch(`${API_URL}/films/${id}`)
	const data: Film = await res.json()
	return data
}
