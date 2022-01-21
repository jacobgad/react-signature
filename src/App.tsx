import { useState } from 'react';
import SignaturePad from './SignaturePad';

export default function App() {
	const [signature, setSignature] = useState<string>('');

	return (
		<div style={{ display: 'grid', placeItems: 'center' }}>
			<h1>Signature: </h1>
			<SignaturePad width={'50%'} height={200} setSignature={setSignature} />
			<h2>Result: </h2>
			{signature && (
				<img style={{ border: '3px solid', borderRadius: 10 }} src={signature} alt='Signature' />
			)}
		</div>
	);
}
