import { useState } from 'react';
import SignaturePad from './SignaturePad';

interface Form {
	firstName: string;
	lastName: string;
	signature: string;
}

export default function App() {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [signature, setSignature] = useState<string>('');
	const [form, setForm] = useState<Form | undefined>(undefined);

	function submit() {
		setForm({ firstName, lastName, signature });
	}

	return (
		<div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
			<h1>Signature Form: </h1>
			<div>
				<label htmlFor='firstName'>First Name </label>
				<input
					type='text'
					id='firstName'
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor='lastName'>Last Name </label>
				<input
					type='text'
					id='lastName'
					onChange={(e) => {
						setLastName(e.target.value);
					}}
				/>
			</div>
			<SignaturePad setSignature={setSignature} />
			<button onClick={submit}>Submit</button>

			<h2>Live Form Preview</h2>
			<p>First Name: {firstName}</p>
			<p>Last Name: {lastName}</p>
			<textarea style={{ width: 400, height: 150, wordWrap: 'break-word' }} value={signature} />

			<h2>Form Output: </h2>
			{form && (
				<>
					<h3>JSON</h3>
					<div style={{ width: 500 }}>
						<pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(form, null, 2)}</pre>
					</div>
					<h3>Signature Image</h3>
					<img src={form.signature} alt='Signature' />
				</>
			)}
		</div>
	);
}
