export const tailwindcssDatas = [
	{
		code: 'flex',
		description: 'flex 만들기',
		originalCss: 'display:flex',
	},
	{
		code: 'hidden',
		description: 'hidden 숨기기 (display:none) 아예 안보이게 하기',
		originalCss: 'display:none',
	},
	{
		code: 'block',
		description: 'block 보이기 (display:block) 보이게 하기',
		originalCss: 'display:block',
	},
	{
		code: 'flex-wrap',
		description: 'flex-wrap 넘치면 줄바꿈',
		originalCss: 'flex-wrap:wrap',
	},
	{
		code: 'flex-nowrap',
		description: 'flex-nowrap 넘치면 줄바꿈 안함',
		originalCss: 'flex-wrap:nowrap',
	},
	{
		code: 'flex-row',
		description: 'flex-row 가로로 정렬',
		originalCss: 'flex-direction:row',
	},
	{
		code: 'flex-col',
		description: 'flex-col 세로로 정렬',
		originalCss: 'flex-direction:column',
	},
	{
		code: 'gap-1',
		description: 'gap-1 간격 1rem',
		originalCss: 'gap:1rem',
	},
	{
		code: 'justify-center',
		description: 'justify-center 주축 기준 가운데 정렬',
		originalCss: 'justify-content:center',
	},
	{
		code: 'justify-start',
		description: 'justify-start 주축 기준 시작 정렬',
		originalCss: 'justify-content:start',
	},
	{
		code: 'justify-end',
		description: 'justify-end 주축 기준 끝 정렬',
		originalCss: 'justify-content:end',
	},
	{
		code: 'justify-between',
		description: 'justify-between 주축 기준 사이 정렬',
		originalCss: 'justify-content:between',
	},
	{
		code: 'justify-around',
		description: 'justify-around 주축 기준 같인 거리 정렬',
		originalCss: 'justify-content:around',
	},
	{
		code: 'items-center',
		description:
			'items-center 교차축 기준 가운데 정렬 세로축 정렬 시 가운데 정렬',
		originalCss: 'align-items:center',
	},
	{
		code: 'items-start',
		description: 'items-start 교차축 기준 시작 정렬 세로축 정렬 시 시작 정렬',
		originalCss: 'align-items:start',
	},
	{
		code: 'items-end',
		description: 'items-end 교차축 기준 끝 정렬 세로축 정렬 시 끝 정렬',
		originalCss: 'align-items:end',
	},
	{
		code: 'w-full',
		description: 'w-full 가로 전체 (100%)',
		originalCss: 'width:100%',
	},
	{
		code: 'w-1/2',
		description:
			'w-1/2 가로 50% 분수는 추가로 1/3, 1/4, 1/5, 1/6, 1/12 등등 가능',
		originalCss: 'width:50%',
	},
	{
		code: 'w-1/3',
		description:
			'w-1/3 가로 33.333333% 분수는 추가로 1/4, 1/5, 1/6, 1/12 등등 가능',
		originalCss: 'width:33.333333%',
	},
	{
		code: 'w-screen',
		description: 'w-screen 가로 전체 (100vw) 뷰포트 기준 가로 전체',
		originalCss: 'width:100vw',
	},
	{
		code: 'max-w-[100px]',
		description:
			'max-w-[100px] 가로 100px width 길이를 최대로 지정할 수 있음 [ ]안에는 어떠한 값도 들어올 수 있음 rem, em, px, % 등등',
		originalCss: 'max-width:100px',
	},
	{
		code: 'w-[100px]',
		description:
			'w-[100px] 가로 100px width 길이를 고정으로 지정할 수 있음 [ ]안에는 어떠한 값도 들어올 수 있음 rem, em, px, % 등등',
		originalCss: 'width:100px',
	},
	{
		code: 'h-screen',
		description: 'h-screen 세로 전체 (100vh) 뷰포트 기준 세로 전체',
		originalCss: 'height:100vh',
	},
	{
		code: 'h-[100px]',
		description:
			'h-[100px] 세로 100px height 길이를 고정으로 지정할 수 있음 [ ]안에는 어떠한 값도 들어올 수 있음 rem, em, px, % 등등',
		originalCss: 'height:100px',
	},
	{
		code: 'h-full',
		description: 'h-full 세로 전체 (100%)',
		originalCss: 'height:100%',
	},
	{
		code: 'p-1',
		description: 'p-1 padding 1rem padding을 넣을 수 있음',
		originalCss: 'padding:1rem',
	},
	{
		code: 'pt-1',
		description: 'pt-1 padding-top 1rem padding을 넣을 수 있음',
		originalCss: 'padding-top:1rem',
	},
	{
		code: 'pr-1',
		description: 'pr-1 padding-right 1rem padding을 넣을 수 있음',
		originalCss: 'padding-right:1rem',
	},
	{
		code: 'pb-1',
		description: 'pb-1 padding-bottom 1rem padding을 넣을 수 있음',
		originalCss: 'padding-bottom:1rem',
	},
	{
		code: 'pl-1',
		description: 'pl-1 padding-left 1rem padding을 넣을 수 있음',
		originalCss: 'padding-left:1rem',
	},
	{
		code: 'px-1',
		description: 'px-1 padding-x 1rem padding을 넣을 수 있음',
		originalCss: 'padding-left:1rem; padding-right:1rem',
	},
	{
		code: 'py-1',
		description: 'py-1 padding-y 1rem padding을 넣을 수 있음',
		originalCss: 'padding-top:1rem; padding-bottom:1rem',
	},
	{
		code: 'm-1',
		description: 'm-1 margin 1rem margin을 넣을 수 있음',
		originalCss: 'margin:1rem',
	},
	{
		code: 'mt-1',
		description: 'mt-1 margin-top 1rem margin을 넣을 수 있음',
		originalCss: 'margin-top:1rem',
	},
	{
		code: 'mr-1',
		description: 'mr-1 margin-right 1rem margin을 넣을 수 있음',
		originalCss: 'margin-right:1rem',
	},
	{
		code: 'mb-1',
		description: 'mb-1 margin-bottom 1rem margin을 넣을 수 있음',
		originalCss: 'margin-bottom:1rem',
	},
	{
		code: 'ml-1',
		description: 'ml-1 margin-left 1rem margin을 넣을 수 있음',
		originalCss: 'margin-left:1rem',
	},
	{
		code: 'mx-1',
		description: 'mx-1 margin-x 1rem margin을 넣을 수 있음',
		originalCss: 'margin-left:1rem; margin-right:1rem',
	},
	{
		code: 'my-1',
		description: 'my-1 margin-y 1rem margin을 넣을 수 있음',
		originalCss: 'margin-top:1rem; margin-bottom:1rem',
	},
	{
		code: 'text-center',
		description: 'text-center 텍스트 가운데 정렬',
		originalCss: 'text-align:center',
	},
	{
		code: 'text-left',
		description: 'text-left 텍스트 왼쪽 정렬',
		originalCss: 'text-align:left',
	},
	{
		code: 'text-right',
		description: 'text-right 텍스트 오른쪽 정렬',
		originalCss: 'text-align:right',
	},
	{
		code: 'whitespace-nowrap',
		description: 'text-nowrap 텍스트 줄바꿈 안함',
		originalCss: 'white-space:nowrap',
	},
	{
		code: 'whitespace-normal',
		description: 'text-normal 텍스트 줄바꿈 함',
		originalCss: 'white-space:normal',
	},
	{
		code: 'whitespace-pre',
		description: 'text-pre 텍스트 줄바꿈 함',
		originalCss: 'white-space:pre',
	},
	{
		code: 'box-border',
		description: 'box-border 박스 크기는 border를 포함',
		originalCss: 'box-sizing:border-box',
	},
	{
		code: 'box-content',
		description:
			'box-content 박스 크기는 border를 포함하지 않음 border가 있으면 요소 크기가 늘어남',
		originalCss: 'box-sizing:content-box',
	},
	{
		code: 'text-sm,md,lg,xl,2xl,...',
		description: 'text-sm,md,lg,xl,2xl,... 텍스트 사이즈 지정 가능',
		originalCss: 'font-size:1rem,1.25rem,1.5rem,1.75rem,2rem,...',
	},
	{
		code: 'text-[100px]',
		description: 'text-[100px] 텍스트 사이즈 지정 가능',
		originalCss: 'font-size:100px',
	},
	{
		code: 'font-bold,normal,...',
		description: 'font-bold,normal,... 폰트 굵기 지정 가능',
		originalCss: 'font-weight:bold,normal,...',
	},
	{
		code: 'font-sans,serif,mono',
		description: 'font-sans,serif,mono 폰트 지정 가능 커스텀 폰트도 지정 가능',
		originalCss: 'font-family:sans-serif,serif,mono',
	},
	{
		code: 'visible',
		description: 'visible 보이기 (visibility:visible) css적으로 보이게 하기',
		originalCss: 'visibility:visible',
	},
	{
		code: 'invisible',
		description: 'invisible 숨기기 (visibility:hidden) css적으로 안보이게 하기',
		originalCss: 'visibility:hidden',
	},
	{
		code: 'object-contain',
		description: 'object-contain 이미지를 크기에 맞게 채움',
		originalCss: 'object-fit:contain',
	},
	{
		code: 'object-cover',
		description: 'object-cover 이미지를 화면 비에 맞게 가득 채움',
		originalCss: 'object-fit:cover',
	},
	{
		code: 'object-center',
		description: 'object-center 이미지를 가운데 정렬',
		originalCss: 'object-position:center',
	},
	{
		code: 'overflow-hidden',
		description: 'overflow-hidden 넘치는 부분을 숨김',
		originalCss: 'overflow:hidden',
	},
	{
		code: 'overflow-auto',
		description:
			'overflow-auto 넘치는 부분을 스크롤 (hidden을 해놨다면 원래로 복귀)',
		originalCss: 'overflow:auto',
	},
	{
		code: 'overflow-x-hidden',
		description:
			'overflow-x-hidden 가로 넘치는 부분을 숨김 x축 스크롤 없애버림',
		originalCss: 'overflow-x:hidden',
	},
	{
		code: 'overflow-y-hidden',
		description:
			'overflow-y-hidden 세로 넘치는 부분을 숨김 y축 스크롤 없애버림',
		originalCss: 'overflow-y:hidden',
	},
	{
		code: 'fixed',
		description: 'fixed 고정 (nav bar 같은거 구현할 때 상단 고정 가능)',
		originalCss: 'position:fixed',
	},
	{
		code: 'absolute',
		description: 'absolute 절대 (부모 요소 기준으로 위치를 잡음)',
		originalCss: 'position:absolute',
	},
	{
		code: 'relative',
		description: 'relative 상대 (자기 자신 기준으로 위치를 잡음)',
		originalCss: 'position:relative',
	},
	{
		code: 'sticky',
		description:
			'sticky 고정 (부모 요소 기준으로 위치를 잡음, 스크롤을 내려도 고정)',
		originalCss: 'position:sticky',
	},
	{
		code: 'top-0 | top-1/3 | top-1/2 | top-2/3 | top-full | top-[100px]',
		description: 'top-0 상단 0px',
		originalCss: 'top:0px',
	},
	{
		code: 'bottom-0 | bottom-1/3 | bottom-1/2 | bottom-2/3 | bottom-full | bottom-[100px]',
		description: 'bottom-0 하단 0px',
		originalCss: 'bottom:0px',
	},
	{
		code: 'left-0 | left-1/3 | left-1/2 | left-2/3 | left-full | left-[100px]',
		description: 'left-0 왼쪽 0px',
		originalCss: 'left:0px',
	},
	{
		code: 'right-0 | right-1/3 | right-1/2 | right-2/3 | right-full | right-[100px]',
		description: 'right-0 오른쪽 0px',
		originalCss: 'right:0px',
	},
	{
		code: 'z-0 | z-10 | z-20 | z-30 | z-40 | z-50',
		description: 'z-0 z-index 0 z index를 지정할 수 있음',
		originalCss: 'z-index:0',
	},
	{
		code: 'bg-red-700',
		description:
			'bg-red-700 배경색 지정 가능 (대부분의 색깔 정하고 채도 정할 수 있음)',
		originalCss: 'background-color:#f87171',
	},
	{
		code: 'bg-opacity-0 | bg-opacity-100',
		description: 'bg-opacity-0 배경색 투명도 지정 가능',
		originalCss: 'background-color:rgba(0,0,0,0)',
	},
	{
		code: 'border-0 | border-2 | border-4 | border-8 | border-[100px]',
		description: 'border-0 border 지정 가능',
		originalCss: 'border-width:0px',
	},
	{
		code: 'border-solid | border-dashed | border-dotted | border-double | border-none',
		description: 'border-solid border 스타일 지정 가능',
		originalCss: 'border-style:solid',
	},
	{
		code: 'border-red-700',
		description: 'border-red-700 border 색 지정 가능',
		originalCss: 'border-color:#f87171',
	},
	{
		code: 'border-opacity-0 | border-opacity-100',
		description: 'border-opacity-0 border 투명도 지정 가능',
		originalCss: 'border-color:rgba(0,0,0,0)',
	},
	{
		code: 'rounded-none | rounded-sm | rounded | rounded-md | rounded-lg | rounded-xl | rounded-2xl | rounded-3xl | rounded-full',
		description: 'rounded-none border-radius 지정 가능 둥근 모서리 지정 가능',
		originalCss: 'border-radius:0px',
	},
	{
		code: 'shadow-sm | shadow | shadow-md | shadow-lg | shadow-xl | shadow-2xl | shadow-inner | shadow-none',
		description: 'shadow-sm 그림자 지정 가능',
		originalCss: 'box-shadow:0 1px 2px 0 rgba(0,0,0,0.05)',
	},
	{
		code: 'cursor-pointer',
		description: 'cursor-pointer 커서를 손가락 모양으로 바꿈, 버튼 같은 것들',
		originalCss: 'cursor:pointer',
	},
	{
		code: 'hover:',
		description:
			'hover: 마우스를 올렸을 때 동작 가능 :뒤에 원하는 변경사항 넣으면 됨',
		originalCss: ':hover',
	},
	{
		code: 'focus:',
		description:
			'focus: 마우스를 올렸을 때 동작 가능 :뒤에 원하는 변경사항 넣으면 됨',
		originalCss: ':focus',
	},
	{
		code: 'transition-all | transition-none | transition',
		description: 'transition-all transition 효과 지정 가능',
		originalCss: 'transition:all 0.15s ease-in-out',
	},
	{
		code: 'transform',
		description: 'transform transform 효과 지정 가능',
		originalCss: 'transform:rotate(0deg)',
	},
	{
		code: 'duration-75 | duration-100 | duration-150 | duration-200 | duration-300 | duration-500 | duration-700 | duration-1000',
		description: 'duration-75 transition 효과 지속시간 지정 가능',
		originalCss: 'transition-duration:75ms',
	},
	{
		code: 'ease-in | ease-out | ease-in-out | linear',
		description: 'ease-in transition 효과 지정 가능',
		originalCss: 'transition-timing-function:cubic-bezier(0.4,0,0.2,1)',
	},
	{
		code: 'delay-75 | delay-100 | delay-150 | delay-200 | delay-300 | delay-500 | delay-700 | delay-1000',
		description: 'delay-75 transition 딜레이 효과 지정 가능',
		originalCss: 'transition-delay:75ms',
	},
	{
		code: 'sm:, md:, lg:, xl:, 2xl:, ...',
		description:
			'sm:, md:, lg:, xl:, 2xl:, ... 반응형으로 지정 가능, 해당 범위를 넘어갈 때 어떠한 변화를 줄 것인 지 정할 수 있음',
		originalCss: '@media(min-width:640px){...}',
	},
];
