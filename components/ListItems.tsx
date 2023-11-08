'use client';

import React from 'react';
import { searchQueryAtom } from '@/atom/atom';
import { useRecoilValue } from 'recoil';

type Props = {
	code: string;
	description: string;
	originalCss: string;
};

const ListItems = (objects: Props) => {
	const searchQuery = useRecoilValue(searchQueryAtom);
	const checkSearchQueryIsEmpty = () => {
		if (searchQuery === '') return true;
	};

	const checkIfSearchQueryIsInCode = () => {
		if (checkSearchQueryIsEmpty()) return false;
		if (
			objects.code.includes(searchQuery) ||
			objects.description.includes(searchQuery) ||
			objects.originalCss.includes(searchQuery)
		)
			return true;
	};

	return (
		<div
			className={`${
				checkIfSearchQueryIsInCode() ? 'bg-red-100' : 'bg-green-100'
			} p-4 rounded-lg shadow-lg
		}`}
		>
			<h1>
				코드 구성 :{' '}
				<strong
					className={`${
						checkIfSearchQueryIsInCode() ? 'text-red-600' : 'text-green-600'
					}`}
				>
					{objects.code}
				</strong>
			</h1>
			<p>
				코드 설명 : <em>{objects.description}</em>
			</p>
			<p>
				css와 비교하기 :{' '}
				<strong className=" text-orange-600">{objects.originalCss}</strong>
			</p>
		</div>
	);
};

export default ListItems;
