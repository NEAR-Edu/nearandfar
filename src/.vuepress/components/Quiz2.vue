<template>
  <QuizComponent 
		:quiz="quiz" :userResponses="userResponseSkelaton" :nextChapter="nextChapter"
	/>
</template>


<script>
	import QuizComponent from "./QuizComponent.vue";

	const quiz1Computer = {
		  title: "Quiz 2: The Internet",
			user: "Student",
			questions: [
				{
					text: "A node is a type of computer.",
					responses: [
						{ text: "True", correct: true },
						{ text: "False" },
					],
				},
				{
					text: "How does data know where to go in a network?",
					responses: [
						{ text: "It sends copies of itself to all nodes in the network"},
						{ text: "Data is broken up into packets." },
						{ text: "the IP address of its destination node helps it navigate the network", correct: true }
					],
				},
				{
					text: "What is the minimum number of connected computers needed to make a network?",
					responses: [
						{ text: "1"},
						{ text: "200"},
						{ text: "2", correct: true },
						{ text: "12"},
					],
				},
				{
					text: "A Network Access Point (NAP) is similar to __________.",
					responses: [
						{ text: "a restaurant that only serves one type of food" },
						{ text: "a neighborhood club"},
						{ text: "the front desk at a  high rise apartment building", correct: true },
						{ text: "a bank vault"}
					],
				},
				{
					text: "How Does the Internet keep time?",
					responses: [
						{ text: "It uses a special syncing protocol", "correct": true},
						{ text: "It averages the time on every server and client"},
						{ text: "It doesn't matter." }
					],
				}
			],
		},
		userResponseSkelaton = Array(quiz1Computer.questions.length).fill(null);

	export default {
		props:["nextChapter"],
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
