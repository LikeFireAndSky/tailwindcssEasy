import React from 'react';
import SearchInput from '@/components/Input';
import ListItems from '@/components/ListItems';
import { tailwindcssDatas } from '@/mockup/data';
import Notice from './page.description';
import ImageExtension from './page.extension';
import Rule from './page.rule';

const page = () => {
	return (
		<div className="w-2/3  flex flex-col items-center justify-center mx-auto mt-12">
			<div
				id="top_container"
				className="w-full"
			>
				<h1 className="mb-5 text-5xl font-extrabold">Tailwindcss 검색해보자</h1>
				<Notice />
				<ImageExtension />
				<Rule />
				<SearchInput />
			</div>
			<div
				id="bottom_container"
				className="flex flex-col gap-3"
			>
				<h1 className="w-full mt-5 text-center font-extrabold text-4xl text-cyan-400 mb-4">
					자주 쓰이는 요소들
				</h1>
				{tailwindcssDatas.map((data, index) => {
					return (
						<ListItems
							key={index}
							{...data}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default page;
