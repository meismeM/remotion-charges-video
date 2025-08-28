import {AbsoluteFill, continueRender, delayRender, staticFile} from 'remotion';
import {z} from 'zod';
import {ElectricChargesVideo} from './Video';
import {contentSchema} from './schemas/content.schema';
import {useCallback, useEffect, useState} from 'react';

const container: React.CSSProperties = {
	backgroundColor: 'white',
};

export const Main = () => {
	const [handle] = useState(() => delayRender());
	const [content, setContent] = useState<z.infer<typeof contentSchema> | null>(
		null
	);

	const fetchContent = useCallback(async () => {
		const res = await fetch(staticFile('content.json'));
		const json = await res.json();
		const validated = contentSchema.parse(json);
		setContent(validated);
		continueRender(handle);
	}, [handle]);

	useEffect(() => {
		fetchContent();
	}, [fetchContent]);

	if (!content) {
		return null;
	}

	return (
		<AbsoluteFill style={container}>
			<ElectricChargesVideo content={content} />
		</AbsoluteFill>
	);
};
