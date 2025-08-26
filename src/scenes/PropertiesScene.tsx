import {AbsoluteFill, useCurrentFrame, interpolate, Easing} from 'remotion';
import React from 'react';

const textStyle: React.CSSProperties = {
	fontFamily: 'Helvetica, Arial, sans-serif',
	fontSize: 60,
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

export const PropertiesScene: React.FC = () => {
	const frame = useCurrentFrame();

	// Repulsion Animation (0-75 frames)
	const repelTextOpacity = interpolate(frame, [0, 20], [0, 1]);
	const repelOffset = interpolate(frame, [20, 60], [0, 200], {easing: Easing.elastic(1), extrapolateRight: 'clamp'});

	// Attraction Animation (75-150 frames)
	const attractTextOpacity = interpolate(frame, [75, 95], [0, 1]);
	const attractOffset = interpolate(frame, [95, 135], [0, -200], {easing: Easing.elastic(1), extrapolateRight: 'clamp'});

	return (
		<AbsoluteFill>
			<div style={{opacity: interpolate(frame, [70, 75], [1, 0])}}>
				<div style={{...textStyle, top: 400, opacity: repelTextOpacity}}>Like Charges Repel</div>
				<div style={{...chargeStyle, backgroundColor: '#e53e3e', top: 800, left: 540 - 50 + repelOffset}}>+</div>
				<div style={{...chargeStyle, backgroundColor: '#e53e3e', top: 800, left: 540 - 50 - 100 - repelOffset}}>+</div>
			</div>
			<div style={{opacity: interpolate(frame, [74, 75], [0, 1])}}>
				<div style={{...textStyle, top: 400, opacity: attractTextOpacity}}>Opposites Attract</div>
				<div style={{...chargeStyle, backgroundColor: '#e53e3e', top: 800, left: 540 - 50 + 200 + attractOffset}}>+</div>
				<div style={{...chargeStyle, backgroundColor: '#3b82f6', top: 800, left: 540 - 50 - 100 - 200 - attractOffset}}>-</div>
			</div>
		</AbsoluteFill>
	);
};
