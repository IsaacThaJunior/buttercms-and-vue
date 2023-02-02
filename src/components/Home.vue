<script>
import Butter from 'buttercms';

export default {
	data() {
		return {
			search: '',
			content: [],
			title: '',
		};
	},

	methods: {
		shareData(post) {
			this.$router.push({
				name: 'Details',
				query: { post: JSON.stringify(post) },
			});
		},
	},

	mounted() {
		const butter = Butter('cd3a6987e220e96a1d76283f0d0d928cac2d1d4d');

		butter.page
			.retrieve('*', 'frequently-asked-questions')
			.then((response) => {
				console.log(response.data.data.fields.faqs_title);
				({ content: this.content } = response.data.data.fields);
				({ title: this.title } = response.data.data.fields.faqs_title);
			})
			.catch(function (resp) {
				console.log(resp);
			});
	},

	// computed: {
	// 	filteredList() {
	// 		return this.content.filter((post) => {
	// 			return post.question_asked
	// 				.toLowerCase()
	// 				.includes(this.search.toLowerCase());
	// 		});
	// 	},
	// },
};
</script>

<template>
	<div id="app">
		<h1 class="title">FAQs with ButterCMS</h1>
		<h2>{{ title }}</h2>

		<div class="search-wrapper">
			<input type="text" v-model="search" placeholder="Search here.." />
			<label>Search Question</label>
		</div>

		<div class="card" v-for="post in filteredList">
			<div class="wrapper" @click="shareData(post)">
				<div class="timeDiv">
					<div class="green">{{ post.question_answered_by }}</div>
					<span>{{ post.question_answered_on.slice(0, 10) }}</span>
				</div>
				<h2>{{ post.question_asked }}</h2>
				<p v-html="post.question_description"></p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
html,
body {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 16px;
	margin-bottom: 16px;
}

div#app {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.search-wrapper {
		position: relative;

		label {
			position: absolute;
			font-size: 18px;
			color: rgba(0, 0, 0, 0.5);
			top: 8px;
			left: 2px;
			z-index: -1;
			transition: 0.15s all ease-in-out;
		}

		input {
			padding: 20px 12px;
			margin-bottom: 30px;
			width: 600px;
			color: rgba(0, 0, 0, 0.7);
			border: 1px solid rgba(0, 0, 0, 0.12);
			border-radius: 20px;
			transition: 0.15s all ease-in-out;
			background: white;
			font-size: 18px;

			&:focus {
				outline: none;
				transform: scale(1.5);

				& + label {
					font-size: 18px;
					font-weight: bold;
					transform: translateY(-55px) translateX(-122px);
				}
			}

			&::-webkit-input-placeholder {
				font-size: 18px;
				color: rgba(0, 0, 0, 0.5);
				font-weight: 100;
			}
		}
	}

	.title {
		color: black;
		padding-bottom: 30px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding-top: 12px;
		text-align: start;
	}

	.card {
		background-color: black;
		border-radius: 10px;
		padding: 20px;
		box-shadow: rgba(0, 0, 0, 0.117647) 0px 4px 10px,
			rgba(0, 0, 0, 0.117647) 0px 1px 4px;
		width: 600px;
		margin: 10px;
		cursor: pointer;
	}

	.timeDiv {
		display: flex;
		justify-content: space-between;
	}

	.green {
		padding: 0 7px;
		text-align: center;
		border-radius: 10px;
		background: green;
		font-weight: bold;
	}
}
</style>
