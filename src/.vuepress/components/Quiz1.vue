<template>
  <QuizComponent 
		:quiz="quiz" :userResponses="userResponseSkelaton" 
	/>
</template>


<script>
	import QuizComponent from "./QuizComponent.vue";

	const quiz1Computer = {
		  title: "Quiz 1: Your Computer",
			user: "Student",
			questions: [
				{
					text: "What type of interface is computer screen?",
					responses: [
						{ text: "Peripheral Interface", correct: true },
						{ text: "Software Interface" },
					],
				},
				{
					text: "The data in a flash drive is an example of __________.",
					responses: [
						{ text: "Data At Rest", correct: true },
						{ text: "Data In Motion" },
						{ text: "Data from Star Trek: Next Generation" },
					],
				},
				{
					text: "If you store all of your data on one computer, then the structure of your data is considered __________.",
					responses: [
						{ text: "Centralized", correct: true },
						{ text: "Decentralized" },
					],
				},
			],
		},
		userResponseSkelaton = Array(quiz1Computer.questions.length).fill(null);

	export default {
		components: {
			QuizComponent,
		},
		data() {
			return {
				quiz: quiz1Computer,
				userResponseSkelaton: userResponseSkelaton
			};
		}
	};
</script>
