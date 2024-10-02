import React from "react";

const FilterSortMenu: React.FC = () => {
	return (
		<div className="w-full border-b border-gray-200 py-3">
			<div className="flex justify-between items-center px-4">
				<ul className="flex space-x-4 text-sm overflow-x-auto whitespace-nowrap">
					<li>오리지널스</li>
					<li>러닝</li>
					<li>아웃도어</li>
					<li>트레이닝</li>
					<li>축구</li>
					<li>농구</li>
					<li>슬리퍼 / 샌들</li>
					<li>테니스</li>
					<li>골프</li>
					<li>스포츠웨어</li>
					<li>스케이트보딩</li>
					<li>남성신발 전체보기</li>
				</ul>
				<button className="flex items-center space-x-2 border border-gray-300 px-3 py-1 rounded whitespace-nowrap ml-4">
					<span>Filter & Sort</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default FilterSortMenu;
