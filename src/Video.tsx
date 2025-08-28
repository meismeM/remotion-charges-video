import {AbsoluteFill, Sequence} from 'remotion';
import {TitleScene} from './sequences/TitleScene';
import {DefinitionScene} from './sequences/DefinitionScene';
import {PropertiesScene} from './sequences/PropertiesScene';
import {FormulaScene} from './sequences/FormulaScene';
import {Content} from './schemas/content.schema';
import {P5Scene} from './sequences/P5Scene';

type Props = {
	content: Content;
};

export const ElectricChargesVideo: React.FC<Props> = ({content}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#1a202c'}}>
			<Sequence durationInFrames={60}>
				<TitleScene title={content.title} />
			</Sequence>
			<Sequence from={60} durationInFrames={120}>
				<DefinitionScene definition={content.definition} />
			</Sequence>
			<Sequence from={180} durationInFrames={150}>
				<PropertiesScene properties={content.properties} />
			</Sequence>
			<Sequence from={330} durationInFrames={120}>
				<FormulaScene formula={content.formula} />
			</Sequence>
			<Sequence from={450} durationInFrames={150}>
				<P5Scene />
			</Sequence>
		</AbsoluteFill>
	);
};
