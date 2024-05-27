export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "bg-[#643ec8] border flex justify-center items-center border-white rounded-full h-10 w-32 text-base";
		case "secondary":
			return "px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100";
		default:
			return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900";
	}
}