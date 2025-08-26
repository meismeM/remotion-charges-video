import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import React from 'react';

const textStyle: React.CSSProperties = {
	fontFamily: 'Helvetica, Arial, sans-serif',
	fontSize: 50,
	color: 'white',
	textAlign: 'center',
	position: 'absolute',
	width: '100%',
};

const chargeStyle: React.CSSProperties = {
	position: 'absolute',
	width: 100,
	height: 100,
	borderRadius: '50%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: 80,
	color: 'white',
};

export const DefinitionScene: React.FC = () => {
	const frame = useCurrentFrame();
	const textOpacity = interpolate(frame, [0, 20], [0, 1]);
	const protonY = interpolate(frame, [20, 50], [1200, 800], {extrapolateRight: 'clamp'});
	const electronY = interpolate(frame, [40, 70], [1200, 1100], {extrapolateRight: 'clamp'});

	return (
		<AbsoluteFill>
			<div style={{...textStyle, top: 300, opacity: textOpacity}}>
				A fundamental property of matter.
			</div>
			<div
				style={{...chargeStyle, backgroundColor: '#e53e3e', top: protonY, left: 490}}
			>+</div>
			<div
				style={{...chargeStyle, backgroundColor: '#3b82f6', top: electronY, left: 490}}
			>-</div>
		</AbsoluteFill>
	);
};
