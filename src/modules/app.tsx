import React from 'react';
import {Box, Text, useInput, useApp} from 'ink';
import {Player} from '../units/index.js';

interface Props extends Player {}

export default function App(props: Props) {
	const {name} = props;

	const {exit} = useApp();

	useInput(input => {
		if (input === 'q') {
			exit();
		}
	});

	return (
		<Box
			height={'100%'}
			width={'100%'}
			padding={10}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			borderStyle={'round'}
		>
			<Text>{name}, 欢迎进入里世界!</Text>
			<Text>按 'q' 退出</Text>
		</Box>
	);
}
