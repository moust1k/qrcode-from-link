import { useState } from 'react'
import QRCode from 'react-qr-code'
import './app.css'

function App() {
	const [input, setInput] = useState('')
	const [inputValue, setInputValue] = useState('')

	const handleGenerate = () => {
		if (input.trim()) {
			setInputValue(input)
			setInput('')
		}
	}

	return (
		<>
			<div className='app'>
				<div className='app__container'>
					<h1 className='app__title'>Generate QRcode from link</h1>
					<div className='app__form'>
						<input type='text' placeholder='https://www.google.com' value={input} onChange={e => setInput(e.target.value)} />
						<button onClick={handleGenerate}>Generate QR</button>
					</div>
					<QRCode bgColor='rgba(241, 227, 227, 0.596)' style={{ height: 'auto', width: '300px' }} value={inputValue} />
				</div>
			</div>
		</>
	)
}

export default App
