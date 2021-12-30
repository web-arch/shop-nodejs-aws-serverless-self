import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
	service: "product-service",
	frameworkVersion: "2",
	plugins: ["serverless-esbuild"],
	provider: {
		name: "aws",
		runtime: "nodejs14.x",
		region: "eu-west-1",
		apiGateway: {
			minimumCompressionSize: 1024,
			shouldStartNameWithService: true,
		},
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
			NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
		},
		lambdaHashingVersion: "20201221",
	},
	functions: {
		getAllProducts: {
			handler: `./handler.getAllProducts`,
			events: [
				{
					http: {
						method: "get",
						path: "products",
						cors: true
					},
				},
			],
		},
		getProductById: {
			handler: `./handler.getProductById`,
			events: [
				{
					http: {
						method: "get",
						path: "products",
						cors: true,
						request: {
							parameters: {
								paths: {
									productId: true
								}
							}
						}
					},
				},
			],
		}
	},
	package: { individually: true },
	custom: {
		esbuild: {
			bundle: true,
			minify: false,
			sourcemap: true,
			exclude: ["aws-sdk"],
			target: "node14",
			define: { "require.resolve": undefined },
			platform: "node",
			concurrency: 10,
		},
	},
};

module.exports = serverlessConfiguration;
