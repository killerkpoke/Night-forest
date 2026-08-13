export interface ShowcaseItem {
	name: string;
	href: string;
	stack: string;
	badge?: string;
	desc: string;
}

export const showcase: ShowcaseItem[] = [
	{
		name: "Sample Project",
		href: "https://github.com/example/sample",
		stack: "TypeScript · CLI",
		badge: "OSS",
		desc: "A short, plain description of what the project does and why it's interesting. One or two sentences is plenty — keep the prose tight so the row stays scannable.",
	},
];
