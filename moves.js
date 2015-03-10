exports.BattleMoves = {
//The code for moves

"boom": {
		num: -2, 
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		desc: "The user explodes and leaves a huge crater in its place. The user faints.",
		shortDesc: "Hits every Pokemon on the battlefield. The user faints.",
		id: "boom",
		name: "Boom",
		pp: 5,
		priority: 0,
		selfdestruct: true,
		secondary: false,
		target: "allAdjacent",
		type: "Normal"
	},
"tornadopunch": {
		num: -27,
		accuracy: 95,
		basePower: 30,
		category: "Physical",
		desc: "Fires a tornado of punches at the opponent.",
		shortDesc: "Hits 2-5 times.",
		id: "tornadopunch",
		name: "Tornado Punch",
		pp: 10,
		isContact: true,
		multiHit: [2, 5],
		secondary: false,
		isTarget: "normal",
		type: "Fighting"
},
"tornadokick": {
		num: -28,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		desc: "Fires a powerful kick at the opponent that rarely causes the opponent to flinch.",
		shortDesc: "10% chance to flinch the opponent.",
		id: "tornadokick",
		name: "Tornado Kick",
		pp: 10,
		isContact: true,
		secondary: {
			chance: 10,
			volatileStatus: 'flinch'
		},
		isTarget: "normal",
		type: "Fighting"
},
"concealedpower": {
		num: -19,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Deals damage to one adjacent target. This move's type depends on the user's individual values (IVs). Type can be any but Normal.",
		shortDesc: "Varies in type based on the user's IVs.",
		id: "concealedpower",
		isViable: true,
		name: "Concealed Power",
		pp: 15,
		priority: 0,
		onModifyMove: function (move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
		},
		secondary: false,
		target: "normal",
		type: "Normal"
	},

	"concealedpowerbug": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Bug",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Bug"
	},
	"concealedpowerdark": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Dark",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Dark"
	},
	"concealedpowerdragon": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Dragon",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Dragon"
	},
	"concealedpowerelectric": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		isViable: true,
		name: "Concealed Power Electric",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Electric"
	},
	"concealedpowerfighting": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		isViable: true,
		name: "Concealed Power Fighting",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Fighting"
	},
	"concealedpowerfire": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		isViable: true,
		name: "Concealed Power Fire",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Fire"
	},
	"concealedpowerflying": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Flying",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Flying"
	},
	"concealedpowerghost": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Ghost",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Ghost"
	},
	"concealedpowergrass": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower"
		isViable: true,
		name: "Concealed Power Grass",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Grass"
	},
	"concealedpowerground": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Ground",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Ground"
	},
	"concealedpowerice": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		isViable: true,
		name: "Concealed Power Ice",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Ice"
	},
	"concealedpowerpoison": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Concealed Power Poison",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Poison"
	},
	"concealedpowerpsychic": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Psychic",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Psychic"
	},
	"concealedpowerrock": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Rock",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Rock"
	},
	"concealedpowersteel": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Steel",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Steel"
	},
	"concealedpowerwater": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Water",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Water"
	},
	"concealedpowerfairy": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "",
		shortDesc: "",
		id: "concealedpower",
		name: "Concealed Power Fairy",
		pp: 15,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
"curingbell": {
		num: -18,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Every Pokemon in the user's party is cured of its major status problem.",
		shortDesc: "Cures the user's party of all status conditions.",
		id: "curingbell",
		isViable: true,
		name: "Curing Bell",
		pp: 10,
		priority: 0,
		isSnatchable: true,
		onHit: function (pokemon, source) {
			var side = pokemon.side;
			for (var i = 0; i < side.pokemon.length; i++) {
				side.pokemon.status = '';
			}
			this.add('-cureteam', source, '[from] move: CuringBell');
		},
		target: "allyTeam",
		type: "Normal"
},
"dragonbite": {
		num: -29,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Crushes the foe with powerful jaws, and may flinch.",
		shortDesc: "10% chance to flinch",
		id: "dragonbite",
		name: "Dragon Bite",
		pp: 10,
		isContact: true,
		secondary: {
			chance: 10,
			volatileStatus: 'flinch'
		},
		isTarget: "normal",
		type: "Dragon"
},
"metalslam": {
		num: -30,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "User slams themselves against the opponent.",
		shortDesc: "No secondary effects.",
		id: "metalslam",
		name: "Metal Slam",
		pp: 5,
		isContact: true,
		secondary: false,
		isTarget: "normal",
		type: "Steel"
},
"electroflash": {
		num: -16,
		accuracy: 70,
		basePower: 0,
		category: "Status",
		desc: " A strong pulse of light paralyses the opponent.",
		shortDesc: "Paralyzes the target.",
		id: "electroflash",
		isViable: true,
		name: "Electro Flash",
		pp: 20,
		priority: 0,
		status: 'par',
		affectedByImmunities: true,
		secondary: false,
		target: "normal",
		type: "Electric"
	},
"regulatorwave": {

		num: -3,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "The user emits a blast of energy that hits multiple foes..",
		shortDesc: "No additional effect. Hits all adjacent foes.",
		id: "dazzlinggleam",
		isViable: true,
		name: "Regulator Wave",
		pp: 20,
		priority: 0,
		secondary: false,
		target: "allAdjacentFoes",
		type: "Normal"

	},

"weakshock": {

		num: -4,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "The opponent is struck with a weak jolt of electricity.",
		shortDesc: "Does damage to one adjacent target. No secondary effect",
		id: "weakshock",
		name: "Weak Shock",
		pp: 45,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Electric"
	},

"kineticslap": {

		num: -5,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "The user slaps the opponent with a fist of concentrated matter.",
		shortDesc: "Does damage to one adjacent target. No secondary effect",
		id: "kineticslap",
		name: "Kinetic Slap",
		pp: 45,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Psychic"
	},

"flingpebbles": {

		num: -6,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "The user hurls small rocks at the opponent.",
		shortDesc: "Does damage to one adjacent target. No secondary effect",
		id: "flingpebbles",
		name: "Fling Pebbles",
		pp: 45,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Rock"
	},
"frozenfist": {
		num: -20,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a 10% chance to freeze it.",
		shortDesc: "10% chance to freeze the target.",
		id: "frozenfist",
		isViable: true,
		name: "Frozen Fist",
		pp: 15,
		priority: 0,
		isContact: true,
		secondary: {
			chance: 10,
			status: 'frz'
		},
		target: "normal",
		type: "Ice"
	},
"wizardfist": {
		num: -21,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a 10% chance to confuse it.",
		shortDesc: "10% chance to confuse the target.",
		id: "icepunch",
		isViable: true,
		name: "Ice Punch",
		pp: 15,
		priority: 0,
		isContact: true,
		secondary: {
			chance: 10,
			volatileStatus: 'confusion'

		},
		target: "normal",
		type: "Ice"
	},
"wraithfist": {
		num: -22,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a 10% chance to flinch it.",
		shortDesc: "10% chance to flinch the target.",
		id: "icepunch",
		isViable: true,
		name: "Ice Punch",
		pp: 15,
		priority: 0,
		isContact: true,
		secondary: {
			chance: 10,
			volatileStatus: 'flinch'

		},
		target: "normal",
		type: "Ghost"
	},
"healthorbs": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "The user surrounds its side of the field with health-restoring orbs that heal allies switching into battle. The amount of HP healed is based upon weakness to Psychic-type attacks.",
	shortDesc: "The user surrounds their side of the field with healing orbs. Health restored depends on weakness to Psychic.",
	id: "healthorbs",
	isNonstandard: true,
	isViable: true,
	name: "Health Orbs",
	pp: 20,
	priority: 0,
	sideCondition: 'healthorbs',
	effect: {
		// this is a side condition
		onStart: function (side) {
			this.add('-sidestart', side, 'move: Health Orbs');
		},
		onSwitchIn: function (pokemon) {
			var typeMod = this.clampIntRange(this.getEffectiveness('Psychic', pokemon), -6, 6);
			this.heal(pokemon.maxhp * Math.pow(2, typeMod) / 8);
		}
	},
	secondary: false,
	target: "allySide",
	type: "Psychic"
},
"icystalagmites": {
		num: -11,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user lays a trap of levitating pillars of ice around the opposing team. Factors Ice weakness.",
		shortDesc: "Hurts foes on switch-in. Factors Ice weakness.",
		id: "icystalagmites",
		isViable: true,
		name: "Icy Stalagmites",
		pp: 20,
		priority: 0,
		isBounceable: true,
		sideCondition: 'icystalagmites',
		effect: {
			// this is a side condition
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Icy Stalagmites');
			},
			onSwitchIn: function (pokemon) {
				var typeMod = this.getEffectiveness('ice', pokemon);
				var factor = 8;
				if (typeMod === 1) factor = 4;
				if (typeMod >= 2) factor = 2;
				if (typeMod === -1) factor = 16;
				if (typeMod <= -2) factor = 32;
				var damage = this.damage(pokemon.maxhp / factor);
			}
		},
		secondary: false,
		target: "foeSide",
		type: "Ice"
	},
"pixiestorm": {
		num: -13,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target. If the target lost HP, the user takes recoil damage equal to 33% that HP, rounded half up, but not less than 1HP. Makes contact.",
		shortDesc: "Has 33% recoil.",
		id: "pixiestorm",
		isViable: true,
		name: "Pixie Storm",
		pp: 5,
		priority: 0,
		isContact: true,
		recoil: [33, 100],
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
"flashfreeze": {
		num: -7,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Uses a quick blast of cold air to chill the foe. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "flashfreeze",
		isViable: true,
		name: "Flash Freeze",
		pp: 20,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Ice"
	},
"rekindle": {
		num: -9,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		id: "rekindle",
		isViable: true,
		name: "Rekindle",
		pp: 10,
		priority: 0,
		isSnatchable: true,
		heal: [1, 2],
		secondary: false,
		target: "self",
		type: "Fire"
	},

"recharge": {
		num: -10,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		id: "recharge",
		isViable: true,
		name: "Recharge",
		pp: 10,
		priority: 0,
		isSnatchable: true,
		heal: [1, 2],
		secondary: false,
		target: "self",
		type: "Electric"
	},
"snowbeam": {
	accuracy: 100,
	basePower: 90,
	category: "Special",
	desc: "Deals damage to one adjacent target with a powerful beam of snow.",
	shortDesc: "Has no extra effects.",
	id: "snowbeam",
	isViable: true,
	isNonstandard: true,
	name: "Snow Beam",
	pp: 15,
	priority: 0,
	secondary: false,
	target: "normal",
	type: "Ice"
	},
"spectralburst": {
		num: -14,
		accuracy: 90,
		basePower: 140,
		category: "Special",
		desc: "The user directs a fury of otherworldly energy at the opponent. Harshly lowers the user's Special-Attack.
",
		shortDesc: "Lowers the user's Sp. Atk by 2.",
		id: "spectralburst",
		isViable: true,
		name: "Spectral Burst",
		pp: 5,
		priority: 0,
		self: {
			boosts: {
				spa: -2
			}
		},
		secondary: false,
		target: "normal",
		type: "Ghost"
	},
"tailslam": {
		num: -15,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Slams the foe using it/'s powerful tail. Deals damage to one adjacent target. Makes contact.",
		shortDesc: "No additional effect.",
		id: "tailslam",
		name: "Tail Slam",
		pp: 10,
		priority: 0,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Normal"
	},
"unnaturalslice": {
		num: -1,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a higher chance for a critical hit. Makes contact.",
		shortDesc: "High critical hit ratio.",
		id: "unnaturalslice",
		isViable: true,
		name: "Unnatural Slice",
		pp: 15,
		priority: 0,
		isContact: true,
		critRatio: 0,
		secondary: false,
		target: "normal",
		type: "Normal"
                getEffectiveness: function (source, target, pokemon) {
			var type = source.type || source;
			var totalTypeMod = 0;
			var types = target.getTypes && target.getTypes() || target.types;
			for (var i = 0; i < types.length; i++) {
				if (!this.data.TypeChart[types]) continue;
				if (types === 'Ghost') {
					totalTypeMod++;
					continue;
				}
				var typeMod = this.data.TypeChart[types].damageTaken[type];
				if (typeMod === 1) { // super-effective
					totalTypeMod++;
				}
				if (typeMod === 2) { // resist
					totalTypeMod--;
				}
			}
			return totalTypeMod;
	},
"venomslash": {
		num: -17,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "The user slashes the foe with corrosive blades, claws, etc. The user receives 25% recoil of the damage dealt.",
		shortDesc: "Has 25% recoil.",
		id: "venomslash",
		isViable: true,
		name: "Venom Slash",
		pp: 10,
		priority: 0,
		isContact: true,
		recoil: [25, 100],
		secondary: false,
		target: "normal",
		type: "Poison"
	},
"voidbreaker": {
		num: -8,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent or non-adjacent target. If the target lost HP, the user takes recoil damage equal to 33% that HP, rounded half up, but not less than 1HP. Makes contact.",
		shortDesc: "Has 33% recoil.",
		id: "voidbreaker",
		isViable: true,
		name: "Void Breaker",
		pp: 15,
		priority: 0,
		isContact: true,
		recoil: [33, 100],
		secondary: false,
		target: "any",
		type: "Dark"
	},

};
