#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import App from './modules/app.js';
import {input} from '@inquirer/prompts';
import {config} from './config/index.js';
import {Player} from './units/index.js';

const bootstrap = async () => {
	let playerName: string = config.get('playerName') as string;

	if (!playerName) {
		playerName = await input({message: '输入玩家名称'});
		config.set('playerName', playerName);
	}

	const player = new Player(playerName);

	render(<App {...player} />);
};

bootstrap();
