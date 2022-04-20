<template>
  <QuizComponent 
		:quiz="quiz" :userResponses="userResponseSkelaton" :nextChapter="nextChapter"
	/>
</template>


<script>
	import QuizComponent from "./QuizComponent.vue";

	const quiz1Computer = {
		  title: "Quiz 3: Web2.0",
			user: "Student",
			questions: [
				{
					text: "API stands for __________.",
					responses: [
						{ text: "Applicable Partitioning Integration" },
						{ text: "Application Program Integration"},
						{ text: "Assignment Practice Inhibitor" },
						{ text: "Application Programming Interface", correct: true },
					],
				},
				{
					text: "What is the difference between a server and a client",
					responses: [
						{ text: "There is no difference."},
						{ text: "A client is any node that has a browser, but servers can never be nodes." },
						{ text: "Although data flows both ways once a connection is established, typically, a client requests information from a server while a server listens for such requests.", correct: true }
					],
				},
				{
					text: "Modularization is a __________.",
					responses: [
						{ text: "tool first used by WordPress sites in the 90's." },
						{ text: "Process of dividing a system into independent parts.", correct: true },
						{ text: "term for 1960's bob haircuts and minimalist furniture." }
					],
				},
				{
					text: "A data packet is like __________.",
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
				},
				{
					text: "What are examples of data-at-rest on the client side?",
					responses: [
						{ text: "Session Storage",},
						{ text: "Browser Local Storage"},
						{ text: "Cookies" },
						{ text: "All of the above", correct: true }
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
