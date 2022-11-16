import { useState } from 'react'

function App() {
	const [changeColor, setChangeColor] = useState('#000000')
	const [changeColor1, setChangeColor1] = useState('#010101')
	const [changeColor2, setChangeColor2] = useState('#101010')
	const [num, setNum] = useState(0)
	const [num1, setNum1] = useState(0)
	const [num2, setNum2] = useState(0)
  const [span, setSpan] = useState('Guess The Color')
	function randomNumberInRange(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	const handleClick = () => {
		setChangeColor('#' + Math.random().toString(16).slice(2, 8))
		setChangeColor1('#' + Math.random().toString(16).slice(2, 8))
		setChangeColor2('#' + Math.random().toString(16).slice(2, 8))
		setNum(randomNumberInRange(1, 7))
		setNum1(randomNumberInRange(1, 7))
		setNum2(randomNumberInRange(1, 7))
    setSpan("Guess The Color")
	}

  const correctGuess = () => {
    setSpan("Correct!")
  }
  const incorrectGuess = () => {
    setSpan("Wrong!")
  }


	return (
		<main className='grid grid-cols-3 items-center m-auto w-screen h-screen p-4 justify-center gap-6'>
			<div className='col-span-3 text-center font-semibold text-3xl'>{span}</div>
      <div className='col-span-1'></div>
			<div
				style={{ backgroundColor: `${changeColor}` }}
				className='w-96 h-96 mx-8'
			></div>

			<div className='mx-28 items-center grid grid-cols-3 col-span-3 gap-12'>
				<button
					style={{ order: `${num}` }}
					className='bg-slate-500 px-4 py-1 rounded-lg'
          onClick={correctGuess}
				>
					{changeColor}
				</button>
				<button
					style={{ order: `${num1}` }}
					className='bg-slate-500 px-4 py-1 rounded-lg'
          onClick={incorrectGuess}
				>
					{changeColor1}
				</button>
				<button
					style={{ order: `${num2}` }}
					className='bg-slate-500 px-4 py-1 rounded-lg'
          onClick={incorrectGuess}
				>
					{changeColor2}
				</button>
			</div>
			<div className='place-items-center grid col-span-3'>
				<button
					onClick={handleClick}
					className='bg-slate-500 px-4 py-1 rounded-lg'
				>
					Next Color
				</button>
			</div>
		</main>
	)
}

export default App
