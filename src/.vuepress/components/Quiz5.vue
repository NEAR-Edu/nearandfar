<template>
  <QuizComponent 
		:quiz="quiz" :userResponses="userResponseSkelaton" :nextChapter=null
	/>
</template>


<script>
	import QuizComponent from "./QuizComponent.vue";

	const quiz1Computer = {
		  title: "Quiz 5: NEAR",
			user: "Student",
			questions: [
				{
					text: "NEAR is a layer 2, Proof of Work (PoW) blockchain built on Ethereum.",
					responses: [
						{ text: "True"},
						{ text: "False", correct: true }
					],
				},
				{
					text: "NEAR is a layer 1, Proof of Stake (PoS) blockchain built from the ground up.",
					responses: [
						{ text: "True", correct: true },
						{ text: "False"}
					],
				},
				{
					text: "Which dApp would best be used to store NEAR tokens?",
					responses: [
						{ text: "Explorer"},
						{ text: "NEAR Wallet", correct: true },
						{ text: "NEAR Exchange" }
					],
				},
				{
					text: "Proof of Stake is __________.",
					responses: [
						{ text: "a consensus mechanism that requires a minimum number of validators to sign a block", correct: true },
						{ text: "a consensus mechanism that requires nodes to do math as proof their validation efforts are trustworthy", },
						{ text: "a dead vampire with a sharp object wrapped in a silver chain blocking their soulless heart, hence the term blockchain" }
					],
				},
				{
					text: "Your NEAR named account (name.near) can only be used to send and receive NEAR tokens.",
					responses: [
						{ text: "True" },
						{ text: "False", correct: true }
					],
				},
				{
					text: "The Full Access Key that NEAR Wallet creates to handle your funds is stored __________ by default.",
					responses: [
						{ text: "on a hardware ledger device"},
						{ text: "in an email attachment" },
						{ text: "nowhere. NEAR wallet only stores your seed phrase" },
						{ text: "in your Browser Local Storage", correct: true }
					],
				},
				{
					text: "Since NEAR is a blockchain network, it can offer the same services of any other cloud provider like Amazon Web Services (AWS), but at faster speeds at a fraction of the costs.",
					responses: [
						{ text: "True"},
						{ text: "False", correct: true }
					],
				},
				{
					text: "Decentralized networks like NEAR are best used __________.",
					responses: [
						{ text: "to store and share assets."},
						{ text: "to store and share assets" },
						{ text: "to side step centralized authorities from censoring or blocking internet access" },
						{ text: "for trustless, peer-to-peer transactions"},
						{ text: "for permanent, hyper-transparent record-keeping"},
						{ text: "all of the above", correct: true },
						{ text: "none of the above"}
					],
				},
				{
					text: "You should be vigilant about protecting your seed phrases and private keys. If you lose your seed phrase or private key, you will lose access to your NEAR account.",
					responses: [
						{ text: "Extremely True", correct: true }
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
