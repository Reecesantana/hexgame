import { useState } from 'react'

function App() {
	const [color, setColor] = useState('#000000')
	const [color1, setColor1] = useState('#010101')
	const [color2, setColor2] = useState('#101010')
	const [num, setNum] = useState(0)
	const [num1, setNum1] = useState(0)
	const [num2, setNum2] = useState(0)
  const [span, setSpan] = useState('Guess The Color')
	function randomNumberInRange(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	const handleClick = () => {
		setColor('#' + Math.random().toString(16).slice(2, 8))
		setColor1('#' + Math.random().toString(16).slice(2, 8))
		setColor2('#' + Math.random().toString(16).slice(2, 8))
		setNum(randomNumberInRange(1, 7))
		setNum1(randomNumberInRange(1, 7))
		setNum2(randomNumberInRange(1, 7))
	}

  const correctGuess = () => {
    setSpan("Correct!")
    handleClick()
  }
  const incorrectGuess = () => {
    setSpan("Wrong!")
    handleClick()
  }
  const reset = () => {
    setSpan('Guess The Color')
  }

	return (
		<main className='grid grid-cols-3 items-center m-auto w-screen h-screen p-4 justify-center gap-6'>
			<div className='col-span-3 text-center font-semibold text-3xl text-slate-50'>{span}</div>
      <div
				style={{ backgroundColor: `${color}` }}
				className='m-0 h-96 col-span-3 justify-center'
			></div>

			<div className='items-center grid grid-cols-1 col-span-3 md:grid-cols-3 m-6'>
				<button
					style={{ order: `${num}` }}
					className='bg-slate-200 border border-slate-800 px-4 py-1 rounded-lg'
          onClick={correctGuess}
				>
					{color}
				</button>
				<button
					style={{ order: `${num1}` }}
					className='bg-slate-200 border border-slate-800 px-4 py-1 rounded-lg'
          onClick={incorrectGuess}
				>
					{color1}
				</button>
				<button
					style={{ order: `${num2}` }}
					className='bg-slate-200 border border-slate-800 px-4 py-1 rounded-lg'
          onClick={incorrectGuess}
				>
					{color2}
				</button>
			</div>
			<div className='place-items-center grid col-span-3'>
				<button
					onClick={reset}
					className='bg-slate-200 border border-slate-800 px-4 py-1 rounded-lg mt-24 md:mt-10'
				>
					Reset
				</button>
			</div>

      <div className="h-96 m-auto text-center container items-center justify-center flex flex-col col-span-3 mt-52">
      <h1 className="text-center text-slate-50 font-semibold text-3xl mb-5">How do you identify Hex Codes?</h1>
      <br/>
      <p className="text-slate-50">Colors in computers use RGB which are values of Red, Green, Blue usually this can be represented by numbers like R:255 G:255 B:255 which would give us white as all of the colors are combining together. however you can also represent these values with Hexadecimals which uses numbers and letters up to f as it uses base 16 for counting. So we usually count with base 10 which means we go 1, 2, 3, ... 9, 10, 11, etc... well in Hexadecimal we count like this: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f, 10... which is weird because 10 actually would output 16. so what does any of that have to do with color? well we can represent those red green and blue values with Hexadecimal numbers so that example of R:255 G:255 B:255 that we had earlier we can represent that with #ffffff or that the red is ff green is ff and blue is ff. so think of ff as the maximum so that 255. So if a color is really red those first two characters in the hex are going to be high. so a color like <span className='text-red-900 font-semibold'>#7f1d1d</span> is really red so we can see the 7f is more than the 1d for the green and blue values. I hope This helped you understand Hex values more now lets see how many you can get correct in a row!</p> 
    </div>

		</main>
	)
}

export default App
