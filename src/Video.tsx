
import {AbsoluteFill, Sequence} from 'remotion';
import {TitleScene} from './scenes/TitleScene';
import {DefinitionScene} from './scenes/DefinitionScene';
import {PropertiesScene} from './scenes/PropertiesScene';
import {FormulaScene} from './scenes/FormulaScene';

// Note: The Blank template might have props like {title}. We don't need them.
export const ElectricChargesVideo: React.FC = () => {
	return (
		// Use AbsoluteFill to create a container with a background color
		<AbsoluteFill style={{backgroundColor: '#1a202c'}}>
			<Sequence from={0} durationInFrames={60}> {/* 2 seconds */}
				<TitleScene />
			</Sequence>
			<Sequence from={60} durationInFrames={120}> {/* 4 seconds */}
				<DefinitionScene />
			</Sequence>
			<Sequence from={180} durationInFrames={150}> {/* 5 seconds */}
				<PropertiesScene />
			</Sequence>
			<Sequence from={330} durationInFrames={120}> {/* 4 seconds */}
				<FormulaScene />
			</Sequence>
		</AbsoluteFill>
	);
};
