exports.BattleStatuses = {
	brn: {
		effectType: 'Status',
		onStart: function (target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'flameorb') {
				this.add('-status', target, 'brn', '[from] item: Flame Orb');
				return;
			}
			this.add('-status', target, 'brn');
		},
		onBasePower: function (basePower, attacker, defender, move) {
			if (move && move.category === 'Physical' && attacker && attacker.ability !== 'guts' && move.id !== 'facade') {
				return this.chainModify(0.5); // This should really take place directly in the damage function but it's here for now
			}
		},
		onResidualOrder: 9,
		onResidual: function (pokemon) {
			this.damage(pokemon.maxhp / 8);
		}
	},
	par: {
		effectType: 'Status',
		onStart: function (target) {
			this.add('-status', target, 'par');
		},
		onModifySpe: function (speMod, pokemon) {
			if (pokemon.ability !== 'quickfeet') {
				return this.chain(speMod, 0.25);
			}
		}
	},
	slp: {
		effectType: 'Status',
		onStart: function (target) {
			this.add('-status', target, 'slp');
			// 1-3 turns
			this.effectData.startTime = this.random(2, 5);
			this.effectData.time = this.effectData.startTime;
		},
		onBeforeMovePriority: 10,
		onBeforeMove: function (pokemon, target, move) {
			if (pokemon.getAbility().isHalfSleep) {
				pokemon.statusData.time--;
			}
			pokemon.statusData.time--;
			if (pokemon.statusData.time <= 0) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'slp');
			if (move.sleepUsable) {
				return;
			}
			return false;
		}
	},
	psn: {
		effectType: 'Status',
		onStart: function (target) {
			this.add('-status', target, 'psn');
		},
		onResidualOrder: 9,
		onResidual: function (pokemon) {
			this.damage(pokemon.maxhp / 8);
		}
	},
	tox: {
		effectType: 'Status',
		onStart: function (target, source, sourceEffect) {
			this.effectData.stage = 0;
			if (sourceEffect && sourceEffect.id === 'toxicorb') {
				this.add('-status', target, 'tox', '[from] item: Toxic Orb');
				return;
			}
			this.add('-status', target, 'tox');
		},
		onSwitchIn: function () {
			this.effectData.stage = 0;
		},
		onResidualOrder: 9,
		onResidual: function (pokemon) {
			if (this.effectData.stage < 15) {
				this.effectData.stage++;
			}
			this.damage(this.clampIntRange(pokemon.maxhp / 16, 1) * this.effectData.stage);
		}
	},
	trapped: {
		noCopy: true,
		onModifyPokemon: function (pokemon) {
			pokemon.tryTrap();
		},
		onStart: function (target) {
			this.add('-activate', target, 'trapped');
		}
	},
	trapper: {
		noCopy: true
	},
	partiallytrapped: {
		duration: 5,
		durationCallback: function (target, source) {
			if (source.hasItem('gripclaw')) return 8;
			return this.random(5, 7);
		},
		onStart: function (pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
		},
		onResidualOrder: 11,
		onResidual: function (pokemon) {
			if (this.effectData.source && (!this.effectData.source.isActive || this.effectData.source.hp <= 0)) {
				pokemon.removeVolatile('partiallytrapped');
				return;
			}
			if (this.effectData.source.hasItem('bindingband')) {
				this.damage(pokemon.maxhp / 6);
			} else {
				this.damage(pokemon.maxhp / 8);
			}
		},
		onEnd: function (pokemon) {
			this.add('-end', pokemon, this.effectData.sourceEffect, '[partiallytrapped]');
		},
		onModifyPokemon: function (pokemon) {
			pokemon.tryTrap();
		}
	},
	twoturnmove: {
		// Skull Bash, SolarBeam, Sky Drop...
		duration: 2,
		onStart: function (target, source, effect) {
			this.effectData.move = effect.id;
			// source and target are reversed since the event target is the
			// pokemon using the two-turn move
			this.effectData.targetLoc = this.getTargetLoc(source, target);
			target.addVolatile(effect.id, source);
		},
		onEnd: function (target) {
			target.removeVolatile(this.effectData.move);
		},
		onLockMove: function () {
			return this.effectData.move;
		},
		onLockMoveTarget: function () {
			return this.effectData.targetLoc;
		}
	},
	choicelock: {
		onStart: function (pokemon) {
			if (!this.activeMove.id || this.activeMove.sourceEffect && this.activeMove.sourceEffect !== this.activeMove.id) return false;
			this.effectData.move = this.activeMove.id;
		},
		onModifyPokemon: function (pokemon) {
			if (!pokemon.getItem().isChoice || !pokemon.hasMove(this.effectData.move)) {
				pokemon.removeVolatile('choicelock');
				return;
			}
			if (pokemon.ignore['Item']) {
				return;
			}
			var moves = pokemon.moveset;
			for (var i = 0; i < moves.length; i++) {
				if (moves[i].id !== this.effectData.move) {
					pokemon.disableMove(moves[i].id, false, this.effectData.sourceEffect);
				}
			}
		}
	},
	stall: {
		// Protect, Detect, Endure counter
		duration: 2,
		counterMax: 256,
		onStart: function () {
			this.effectData.counter = 3;
		},
		onStallMove: function () {
			// this.effectData.counter should never be undefined here.
			// However, just in case, use 1 if it is undefined.
			var counter = this.effectData.counter || 1;
			this.debug("Success chance: " + Math.round(100 / counter) + "%");
			return (this.random(counter) === 0);
		},
		onRestart: function () {
			if (this.effectData.counter < this.effect.counterMax) {
				this.effectData.counter *= 3;
			}
			this.effectData.duration = 2;
		}
	},
	gem: {
		duration: 1,
		affectsFainted: true,
		onBasePower: function (basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify([0x14CD, 0x1000]);
		}
	},
	aura: {
		duration: 1,
		onBasePowerPriority: 8,
		onBasePower: function (basePower, user, target, move) {
			var modifier = 4 / 3;
			this.debug('Aura Boost');
			if (user.volatiles['aurabreak']) {
				modifier = 0.75;
				this.debug('Aura Boost reverted by Aura Break');
			}
			return this.chainModify(modifier);
		}
	},

		// terrains

	// weather is implemented here since it's so important to the game but is still buggy

"desert": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field a desert. Ground-, Rock-, and Steel-types gain 10% in Defense and Special Defense. Ground-types gain 10% Attack. Flying lose 10% in Speed. Water-type moves become Water/Ground Type. Lasts for 8 turns.",
	shortDesc: "Field becomes a desert. Ground, Rock, and Steel gain 10% in Def and Sp. Def. Ground-types get 10% Atk boosts. Flying-types lose 10% speed. Water moves become Water/Ground. Lasts 8 turns.",
	id: "desert",
	isNonstandard: true,
	isViable: true,
	name: "Desert",
	pp: 8,
	priority: 0,
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Desert', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onTypings: function (pokemon, move, type, typeMod) {
		if (pokemon.type === 'Ground' || pokemon.type === 'Rock' || pokemon.type === 'Steel') {
			boosts: {
				def: 1,
				spd: 1
			}
		} else if (pokemon.type === 'Ground') {
			boosts: {
				atk: 1
			}
		} else if (pokemon.type === 'Flying') {
			boosts: {
				spe: -1
			}
		} else if (move.type === 'Water') {
			return typeMod + this.getEffectiveness('Ground', type);
		}
	},
	secondary: false,
	target: "all",
	type: "Ground"
},
"glacier": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field a glacier. Ice types gain 20% to both defense stats. Water-type moves become Water/Ice-type moves. Lasts for 8 turns.",
	shortDesc: "Field becomes glacier. Ice types get 20% to defense stats. Water moves become Water/Ice. Lasts 8 turns.",
	id: "glacier",
	isNonstandard: true,
	isViable: true,
	name: "Glacier",
	pp: 8,
	priority: 0,
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Desert', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onEffectiveness: function (typeMod, type, move, pokemon) {
		if (pokemon.type === 'Ice') {
			boosts: {
				def: 2,
				spd: 2
			}
		} else if (move.type === 'Water') {
			return typeMod + this.getEffectiveness('Ice', type);
		}
	},
	secondary: false,
	target: "all",
	type: "Ice"
},
"meadow": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field a meadow. Bug-types gain 10% in Defense and Special Defense. Grass-types gain 25% Attack. Flying gain 10% in Speed. Water-type moves become Water/Grass Type. Lasts for 8 turns.",
	shortDesc: "Field becomes meadow. Bug gain 10% in Def and Sp. Def. Grass-types get 25% Atk. Flying-types gain 10% speed. Water moves become Water/Grass. Lasts 8 turns.",
	id: "meadow",
	isNonstandard: true,
	isViable: true,
	name: "Meadow",
	pp: 8,
	priority: 0,
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Meadow', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onTypings: function (pokemon, move, type, typeMod) {
		if (pokemon.type === 'Bug') {
			boosts: {
				def: 1,
				spd: 1
			}
		} else if (pokemon.type === 'Grass') {
			boosts: {
				atk: 3
			}
		} else if (pokemon.type === 'Flying') {
			boosts: {
				spe: 1
			}
		} else if (move.type === 'Water') {
			return typeMod + this.getEffectiveness('Grass', type);
		}
	},
	secondary: false,
	target: "all",
	type: "Grass"
},
"ocean": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field an ocean. Water-types gain 10% in Defense and Special Defense. Fire lose 20% in Defense. Lasts for 8 turns.",
	shortDesc: "Field becomes ocean. Water gain 10% in Def and Sp. Def. Fire-types lose 20% Defense. Lasts 8 turns.",
	id: "ocean",
	isNonstandard: true,
	isViable: true,
	name: "Ocean",
	pp: 8,
	priority: 0,
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Ocean', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onTypings: function (pokemon, move) {
		if (pokemon.type === 'Water') {
			boosts: {
				def: 1,
				spd: 1
			}
		} else if (pokemon.type === 'Fire') {
			boosts: {
				def: -2
			}
		}
	},
	secondary: false,
	target: "all",
	type: "Water"
},
"pollutedlandscape": {
	accuracy: true,
	basePower: 0,
	category: "Status",
	desc: "Makes the field a polluted landscape. Dark-types gain 10% in Defense and Special Defense. Poison-types gain 25% in Special Attack. Water-type moves become Water/Poison Type. Lasts for 8 turns.",
	shortDesc: "Field becomes polluted landscape. Dark gain 10% in Def and Sp. Def. Poison-types get 25% Sp. Atk. Water moves become Water/Poison. Lasts 8 turns.",
	id: "pollutedlandscape",
	isNonstandard: true,
	isViable: true,
	name: "Polluted Landscape",
	pp: 8,
	priority: 0,
	onTry: function (target, source) {
		if (this.isWeather(['desolateland', 'primordialsea', 'deltastream'])) {
			this.add('-fail', source, 'move: Polluted Landscape', '[from]: ' + this.effectiveWeather());
			return null;
		}
	},
	onTypings: function (pokemon, move, type, typeMod) {
		if (pokemon.type === 'Dark') {
			boosts: {
				def: 1,
				spd: 1
			}
		} else if (pokemon.type === 'Poison') {
			boosts: {
				spa: 3
			}
		} else if (move.type === 'Water') {
			return typeMod + this.getEffectiveness('Poison', type);
		}
	},
	secondary: false,
	target: "all",
	type: "Poison"
}
};
