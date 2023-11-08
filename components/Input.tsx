'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import _ from 'lodash';
import { Input } from '@material-tailwind/react/components/Input';
import { searchQueryAtom } from '@/atom/atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Button } from '@material-tailwind/react';

type Inputs = {
	searchQuery: string;
};

const SearchInput = () => {
	const setSearchQuery = useSetRecoilState(searchQueryAtom);
	const { register, handleSubmit, reset } = useForm<Inputs>();

	const cleanString = (str: string) => {
		const cleanStr = _.replace(str, /[^a-zA-Z0-9\uAC00-\uD7A3]/g, '');
		return cleanStr;
	};

	const onSubmit: SubmitHandler<Inputs> = data => {
		const cleanQuery = cleanString(data.searchQuery);
		console.log(cleanQuery);
		setSearchQuery(cleanQuery);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex justify-center items-center w-full gap-1"
		>
			<Input
				crossOrigin="anonymous"
				type="text"
				label="검색어를 입력하세요"
				{...register('searchQuery', {
					required: true,
				})}
			/>
			<Button
				type="submit"
				className=" whitespace-nowrap"
			>
				검색
			</Button>
		</form>
	);
};

export default SearchInput;
