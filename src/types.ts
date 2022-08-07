export interface Film {
	id: string
	title: string
	original_title: string
	original_title_romanised: string
	image: string
	movie_banner: string
	description: string
	director: string
	producer: string
	release_date: string
	running_time: string
	rt_score: string
	people: string[]
	species: string[]
	locations: string[]
	vehicles: string[]
	url: string
}

export interface People {
	id: string
	name: string
	gender?: Gender
	age: string
	eye_color: string
	hair_color: string
	films: string[]
	species: string
	url: string
	gander?: Gender
}

export enum Gender {
	Female = 'Female',
	Male = 'Male',
	Na = 'NA',
}
