export class Player {
	name: string;
	level: number;
	health: number;

	constructor(name: string) {
		this.name = name;
		this.level = 1;
		this.health = 100;
	}
}
