import must1 from '@/public/must1.png';
import must2 from '@/public/must2.png';
import Image from 'next/image';

const ImageExtension = () => {
	return (
		<div className="mb-5 flex flex-col gap-2">
			<h1 className="w-full text-center font-extrabold text-4xl text-cyan-400 mb-4">
				깔아야 할 VS코드 익스텐션들
			</h1>
			<Image
				src={must1}
				alt="must1"
				className="rounded-md w-full"
			/>
			<strong>
				무조건 설치하세요. className에 적을 때 자동완성이랑 기능 보여줍니다.
			</strong>
			<Image
				src={must2}
				alt="must2"
				className="rounded-md w-full"
			/>
			<p>테일윈드 디자인 한 것들이 알록달록하게 변합니다.</p>
		</div>
	);
};

export default ImageExtension;
