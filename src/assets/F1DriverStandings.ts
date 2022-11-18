export interface DriverStanding {
	Constructors: Constructors,
	Driver: Driver,
	points: string,
	position: string,
	wins: string
}

export interface Constructors {
	constructorId: string,
	name: string,
	nationality: string,
	url: string,
	img: string
}

export interface Driver {
	code: string,
	dateOfBirth: string,
	driverId: string,
	familyName: string,
	givenName: string,
	nationality: string,
	permanentNumber: string,
	url: string,
	img: string
}