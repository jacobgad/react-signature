import { useEffect, useState } from 'react';
import Signature_Pad from 'signature_pad';

interface Props {
	setSignature: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignaturePad({ setSignature }: Props) {
	const [signaturePad, setSignaturePad] = useState<Signature_Pad>();

	const clear = () => {
		signaturePad && signaturePad.clear();
		setSignature('');
	};

	function update() {
		signaturePad && setSignature(signaturePad.toDataURL());
	}

	useEffect(() => {
		function readyPad() {
			let wrapper = document.getElementById('signature-pad');
			let canvas = wrapper?.querySelector('canvas');
			if (canvas) {
				const ratio = Math.max(window.devicePixelRatio || 1, 1);
				canvas.width = canvas.offsetWidth * ratio;
				canvas.height = canvas.offsetHeight * ratio;
				canvas.getContext('2d')?.scale(ratio, ratio);
				let readySignaturePad = new Signature_Pad(canvas);
				setSignaturePad(readySignaturePad);
			}
		}
		readyPad();
	}, [setSignaturePad]);

	return (
		<>
			<button onClick={clear}>Clear Signature</button>
			<div
				id='signature-pad'
				style={{
					width: 350,
					height: 150,
					border: '3px solid',
					borderRadius: 10,
					backgroundColor: 'white',
				}}
			>
				<canvas style={{ width: '100%', height: '100%' }} onClick={update} onTouchEnd={update} />
			</div>
		</>
	);
}
