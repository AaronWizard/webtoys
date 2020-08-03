const HtmlWebPackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const sass = require('sass');

module.exports = {
	entry: './src/index.jsx',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				test: /\.scss$/,
				include: /\.module\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: sass,
						},
					},
				],
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: sass,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new StylelintPlugin(),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
};
