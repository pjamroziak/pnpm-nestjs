.PHONY: test

run:
	pnpm run build
	pnpm run start

debug:
	pnpm run build
	pnpm run start:debug

test:
	pnpm run test
