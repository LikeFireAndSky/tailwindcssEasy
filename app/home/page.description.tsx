import React from 'react';

const Notice = () => {
	return (
		<div className="flex flex-col gap-5 mb-10">
			<h1 className="w-full text-center font-extrabold text-4xl text-cyan-400 mb-4">
				자주 쓰이는 조합들
			</h1>
			<section className="flex flex-col gap-2">
				<div className="w-full flex flex-col items-center gap-3 bg-orange-900">
					<div className="w-full h-1/3 flex justify-center bg-red-200">
						박스1
					</div>
					<div className="w-full h-1/3 flex justify-center bg-red-200">
						박스2
					</div>
					<div className="w-full h-1/3 flex justify-center bg-red-200">
						박스3
					</div>
				</div>
				<strong>
					1. className= &apos;w-full flex flex-col items-center gap-3&apos;
				</strong>
				<p>
					코드 해석 :{' '}
					<em>
						width를 100퍼센트로 맞추고 flex를 할건데 세로축으로 정렬할 예정,
						요소들 사이 간격은 gap-3
					</em>
				</p>
			</section>
			<section className="flex flex-col gap-2">
				<div className="w-full flex flex-row items-center gap-3 bg-orange-900">
					<div className="w-full h-1/3 flex justify-center bg-red-200">
						박스1
					</div>
					<div className="w-full h-1/3 flex justify-center bg-red-200">
						박스2
					</div>
					<div className="w-full h-1/3 flex justify-center bg-red-200">
						박스3
					</div>
				</div>
				<strong>
					2. className= &apos;w-full flex flex-row items-center gap-3&apos;
				</strong>
				<p>
					코드 해석 :{' '}
					<em>
						width를 100퍼센트로 맞추고 flex를 할건데 가로축으로 정렬할 예정,
						요소들 사이 간격은 gap-3
					</em>
				</p>
			</section>
			<section className="flex flex-col gap-2">
				<div className="w-full h-1/3 flex justify-center bg-red-700 hover:bg-yellow-700 transition-all duration-1000 ease-in">
					박스1
				</div>
				<strong>
					3. className= &apos;bg-red-700 hover:bg-yellow-700 transition-all
					duration-1000 ease-in&apos;
				</strong>
				<p>
					코드 해석 :{' '}
					<em>
						hover 했을 때 사용하는 방법, hover을 하면 동작하기 원하는 css를
						hover: 뒤에다가 기술한다. transition-all은 모든 요소에게
						transition을 적용하게하고 duration은 1초동안 transition을
						적용하게하고 ease-in은 transition을 적용할 때 ease in 하게 적용하게
						한다. hover와 같은 이벤트는 transition을 적용할 때 사용하면 좋다.
					</em>
				</p>
			</section>
			<section className="flex flex-col gap-2">
				<p className="w-full text-3xl text-center text-blue-700 font-extrabold">
					이것은 텍스트 입니다.
				</p>
				<strong>
					4. className= &apos;-full text-3xl text-center text-blue-700
					font-extrabold&apos;
				</strong>
				<p>
					코드 해석 :{' '}
					<em>
						텍스트를 다룰 때 사용한다. text-3xl은 크기, text-center는 가운데
						정렬, text-blue는 텍스트 색깔, font-extrabold는 폰트 굵기이다.
					</em>
				</p>
			</section>
		</div>
	);
};

export default Notice;
