import React from 'react';

const Rule = () => {
	return (
		<div className="flex flex-col gap-5">
			<h1 className="w-full text-center font-extrabold text-4xl text-cyan-400 mb-4">
				규칙을 알면 쉽습니다.
			</h1>
			<p>
				1. <strong>w-, h-</strong> 다음에는 분수, full, [ ] 등이 올 수 있습니다.
				대충 퍼센트로 때려맞춘다하면 분수 쓰고 꽉 채울 땐 full 사용하면 됩니다.
			</p>
			<p>
				2. <strong>p-, m-</strong> 패딩과 마진은 t = top, b = bottom 등과 붙여서
				사용할 수 있습니다. 만약에 margin-top이면 mt-3 (원하는 마진 값)입니다.
				mx는 margin-x축, my는 margin-y축 입니다.
			</p>
			<p>
				3. <strong>일단 쳐보자!!</strong> 위에서 언급한 extension을 깔면 웬만한
				css의 이름이 비슷하기 때문에 하나정도는 나옵니다.
			</p>
			<p>
				4. <strong>bg-, text-</strong> 배경색을 넣을 때 사용합니다. bg-red-500
				이런 식으로 사용합니다. 색깔은 빨주노초파남보 웬만해서는 있습니다.
				text랑 bg-말고 들어가지 않는 것 같습니다.
			</p>
			<p>
				5. <strong>공식문서 최고!!</strong> 공식문서에 정말 잘 나와있습니다.
				검색해보셔도 좋을 것 같습니다.
			</p>
			<a
				className="text-blue-700 text-center mb-3 hover:text-purple-500 transition-all duration-100 ease-in"
				href="https://tailwindcss.com/docs/display"
			>
				I&apos;m 공식문서
			</a>
			<a
				className="text-red-700 text-center mb-3 hover:text-purple-500 transition-all duration-100 ease-in"
				href="https://lembdadev.com/css-to-tailwind-converter"
			>
				도저히 모르겠을 때 CSS를 변환할 수 있는 사이트
			</a>
		</div>
	);
};

export default Rule;
