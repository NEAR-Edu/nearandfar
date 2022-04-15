<template>
  <QuizComponent 
		:quiz="quiz" :userResponses="userResponseSkelaton" 
	/>
</template>


<script>
	import QuizComponent from "./QuizComponent.vue";

	const quiz1Computer = {
		  title: "Quiz 4: Web3.0",
			user: "Student",
			questions: [
				{
					text: "A Web3 decentralized network consists of computers around the world sharing __________.",
					responses: [
						{ text: "a single state", correct: true },
						{ text: "a single country" },
						{ text: "a single sys admin"},
						{ text: "a single NFT" },
					],
				},
				{
					text: "Web3 neither relies on nor is accessble by Web2.",
					responses: [
						{ text: "True"},
						{ text: "False", correct: true }
					],
				},
				{
					text: "What is stopping a dApp from doing something like counting to 1 billion in one transaction?",
					responses: [
						{ text: "Nothing. That is why we need to regulate the blockchain." },
						{ text: "Transaction fees and gas limits prevent storage and compute going off the rails.", correct: true },
						{ text: "It's not Turing complete unless it's regularly tested with such scenarios." }
					],
				},
				{
					text: "What does blockchain \"measure\"?",
					responses: [
						{ text: "Transaction history" },
						{ text: "Smart contracts"},
						{ text: "Time", correct: true },
						{ text: "NFTs"}
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
					text: "Once data is stored on the blockchain, it can be accessed by anyone.",
					responses: [
						{ text: "True", correct: true  },
						{ text: "False"}
					],
				},
				{
					text: "Once data is stored on the blockchain, it can be modified by anyone.",
					responses: [
						{ text: "True"},
						{ text: "False", correct: true  }
					],
				},
				{
					text: "If two nodes have different block heights, which one is \"correct\"?",
					responses: [
						{ text: "The both are."},
						{ text: "They cancel each other out."},
						{ text: "The one with the higher block height is correct."},
						{ text: "Consensus (i.e. 51% of the nodes ) determines the correct height.", correct: true },
					],
				},
				{
					text: "Proof of Work (PoW) is the only way to reach consensus in a blockchain.",
					responses: [
						{ text: "True"},
						{ text: "False", correct: true }
					],
				}
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
