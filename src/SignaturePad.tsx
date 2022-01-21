import { useEffect, useState } from 'react';
import Signature_Pad from 'signature_pad';

interface Props {
	width?: number | string;
	height?: number | string;
	setSignature: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignaturePad({ width, height, setSignature }: Props) {
	const [signaturePad, setSignaturePad] = useState<Signature_Pad>();

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

	function clear() {
		signaturePad && signaturePad.clear();
		setSignature('');
	}

	function submit() {
		signaturePad && setSignature(signaturePad.toDataURL('image/svg+xml'));
	}

	useEffect(() => {
		readyPad();
		if (typeof width == 'number') width = width + 'px';
		if (typeof height == 'number') height = height + 'px';
	}, []);

	return (
		<>
			<div
				id='signature-pad'
				style={{
					width,
					height,
					border: '3px solid',
					borderRadius: 10,
				}}
			>
				<canvas style={{ width: '100%', height: '100%' }} />
			</div>
			<div>
				<button onClick={clear}>Clear</button>
				<button onClick={submit}>Submit</button>
			</div>
		</>
	);
}
