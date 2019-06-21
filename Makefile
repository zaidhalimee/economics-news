none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	npm ci;

installProd:
	rm -rf node_modules
	npm ci --only=production

developmentTests:
	npx apache2-license-checker;
	npm run test;
	xvfb-run npm run test:e2e:storybook:ci;
	# Xvfb :99 &
	# export PIDFILE=$(echo $!);
	# npm run test:e2e:storybook:ci;
	# kill -SIGTERM $(echo $PIDFILE);

productionTests:
	npm run build;
	npm run build && xvfb-run npm run test:prod:ci
	# Xvfb :99 &
	# export PIDFILE=$(echo $!);
	# npm run test:prod:ci;
	# kill -SIGTERM $(echo $PIDFILE);

buildStorybook:
	npm run build:storybook;
