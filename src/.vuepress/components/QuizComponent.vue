<template>
  <!--container-->
  <section class="container">
    <!--questionBox-->
    <div class="questionBox" id="app">
      <!-- transition -->
      <transition
        :duration="{ enter: 500, leave: 300 }"
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
        mode="out-in"
      >
        <!--questionContainer-->
        <div
          class="questionContainer"
          v-if="questionIndex < quiz.questions.length"
          v-bind:key="questionIndex"
        >
          <header>
            <h1 class="title is-6">{{quiz.title}}</h1>
            <!--progress-->
            <div class="progressContainer">
              <progress
                class="progress is-info is-small"
                :value="(questionIndex / quiz.questions.length) * 100"
                max="100"
              >
                {{ (questionIndex / quiz.questions.length) * 100 }}%
              </progress>
              <p>
                {{ Math.round((questionIndex / quiz.questions.length) * 100) }}% complete
              </p>
            </div>
            <!--/progress-->
          </header>

          <!-- questionTitle -->
          <h2 class="titleContainer title">
            {{ quiz.questions[questionIndex].text }}
          </h2>

          <!-- quizOptions -->
          <div class="optionContainer">
            <div
              class="option"
              v-for="(response, index) in filtered"
              @click="selectOption(index)"
              :class="{ 'is-selected': userResponses[questionIndex] == index, 'is-correct': userResponses[questionIndex] == index && isCorrect , 'is-incorrect': userResponses[questionIndex] == index && isIncorrect }"
              :key="index"
            >
              {{ response }}
            </div>
          </div>

          <!--quizFooter: navigation and progress-->
          <footer class="questionFooter">
            <!--pagination-->
            <nav class="pagination" role="navigation" aria-label="pagination" :style="{'flex-direction': questionIndex > 0 ? 'row': 'row-reverse'}">
              <!-- back button -->
              <a
								v-if="questionIndex > 0"
                class="button"
                v-on:click="prev()"
                :disabled="questionIndex < 1"
              >
                Back
              </a>
      
              <!-- next button -->
              <a
                class="button"
								style="align-self:right"
                :class="userResponses[questionIndex] == null ? '' : 'is-active'"
                v-on:click="next()"
                :disabled="questionIndex >= quiz.questions.length"
              >
                {{ userResponses[questionIndex] == null ? "Skip" : "Next" }}
              </a>
            </nav>
            <!--/pagination-->
          </footer>
          <!--/quizFooter-->
        </div>
        <!--/questionContainer-->

        <!--quizCompletedResult-->
        <div
          v-else-if="questionIndex >= quiz.questions.length"
          v-bind:key="questionIndex"
          class="quizCompleted has-text-centered"
        >
          <!-- quizCompletedIcon: Achievement Icon -->
          <span class="icon">
            <i
              class="fa"
              :class="
                score() > 3 ? 'fa-check-circle-o is-active' : 'fa-times-circle'
              "
            ></i>
          </span>

          <!--resultTitleBlock-->
          <h2 class="title">
            You did
            {{
              ((score() / quiz.questions.length) * 100) > 50 ? "an amazing" : ((score() / quiz.questions.length) * 100) < 50 ? "an okay" : "a good"
            }}
            job!
          </h2>
          <p class="subtitle">
            Total score: {{ score() }} / {{ quiz.questions.length }}
          </p>
          <br />
					<div class="buttonContainer">
          <a class="button" @click="restart()"
            >restart <i class="fa fa-refresh"></i
          ></a>
	
					<router-link v-if="nextChapter !== null" :to="nextChapter" class="button" aria-label="continue">continue</router-link>
					</div>
          <br />
          <!--/resultTitleBlock-->
        </div>
        <!--/quizCompetedResult-->
      </transition>
    </div>
    <!--/questionBox-->
  </section>
  <!--/container-->
</template>s

<script>

  export default {  
    props: ['quiz', 'userResponses', 'nextChapter'],
    data() {
      return {
          questionIndex: 0,
          isActive: false,
					isCorrect: false,
					isIncorrect: false
      }
    },

    computed: {
      filtered: function() {
        return this.quiz.questions[this.questionIndex].responses.map((response, idx) => `${String.fromCharCode(97 + idx)}. ${response.text}`);
      }
    },
    methods: {
      restart: function(){
				this.resetValidation();
        this.questionIndex=0;
        this.userResponses=Array(this.quiz.questions.length).fill(null);
      },
			resetValidation: function(){
				this.isCorrect = false;
				this.isIncorrect = false;
			},
      selectOption: function(index) {
				this.resetValidation();
        this.userResponses[this.questionIndex] = index;
      },
      next: function() {
				// if clicking "skip" don't wait for timeout
				if (this.userResponses[this.questionIndex] == null) return this.questionIndex++

				let isCorrectResponse = this.userResponses[this.questionIndex] !== null ? this.quiz.questions[this.questionIndex].responses[this.userResponses[this.questionIndex]]['correct'] : null
				if (this.questionIndex < this.quiz.questions.length) {
					if (isCorrectResponse) {
						this.isCorrect = true
					} else {
						this.isIncorrect = true
					}
					// leave time for user to check their answer
					setTimeout(() => {
						this.resetValidation()
						this.questionIndex++;
					}, 1000)
				}
      },

      prev: function() {
				this.resetValidation()
        if (this.quiz.questions.length > 0) this.questionIndex--;
      },

      continue: function() {
        if (this.quiz.questions.length > 0) this.questionIndex--;
      },

      // Return "true" count in userResponses
      score: function() {
          var score = 0;
          for (let i = 0; i < this.userResponses.length; i++) {
            if (
                typeof this.quiz.questions[i].responses[
                  this.userResponses[i]
                ] !== "undefined" &&
                this.quiz.questions[i].responses[this.userResponses[i]].correct
            ) {
                score = score + 1;
            }
          }
          return score;

          //return this.userResponses.filter(function(val) { return val }).length;
      }
    }

  }
</script>

<style lang="scss" scoped>

	$trans_duration: 0.3s;
	$primary_color: #3D5AFE;

	@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
	@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

	body {
		font-family: "Open Sans", sans-serif;
		font-size: 14px;
		
		height: 100vh;

		background: #CFD8DC;
		
		/* mocking native UI */
		cursor: default !important; /* remove text selection cursor */
		user-select: none; /* remove text selection */
		-webkit-user-drag: none; /* disbale element dragging */
		
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button {
		transition: $trans_duration;
	}
	.title,
	.subtitle {
		font-family: Montserrat, sans-serif;
		font-weight: normal;
	}
	.animated {
		transition-duration: calc($trans_duration/2);
	}

	.container {
		margin: 0 0.5rem;
	}

	.questionBox {
		
		max-width: 30rem;
		width: 30rem;
		min-height: 30rem;
		
		background: #FAFAFA;
		position: relative;
		display: flex;
		
		border-radius: 0.5rem;
		overflow: hidden;
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
		
		header {
			background:rgba(0,0,0,0.025);
			padding: 1.5rem;
			text-align: center;
			border-bottom: 1px solid rgba(0,0,0,0.1);
			
			h1 {
				font-weight: bold;
				margin-bottom: 1rem !important;
			}
			.progressContainer {
				width: 60%;
				margin: 0 auto;
				> progress {
					margin:0;
					border-radius: 5rem;
					overflow: hidden;
					border:none;
					color:$primary_color;
					&::-moz-progress-bar { background: $primary_color; }
					&::-webkit-progress-value { background: $primary_color; }
				}
				> p {
					margin:0;
					margin-top: 0.5rem;
				}
					}
		}
		.titleContainer {
			text-align: center;
			margin: 0 auto;
			padding: 1.5rem;

				}

		.quizForm {
			display: block;
				white-space: normal;

				height: 100%;
				width: 100%;

				.quizFormContainer {
					height: 100%;
					margin: 15px 18px;

					.field-label {
						text-align: left;
							margin-bottom: 0.5rem;
					}
				}
		}
		.quizCompleted {
			width: 100%;
				padding: 1rem;
			text-align:center;
			
			> .icon {
				color: #FF5252;
				font-size: 5rem;
				
				.is-active {
					color: #00E676;
				}
			}
		}
		.questionContainer {
			white-space: normal;
				height: 100%;
				width: 100%;

				.optionContainer {
					margin-top: 12px;
					flex-grow: 1;
					.option {
						border-radius: 290486px;
							padding: 9px 18px;
							margin: 0 18px;
							margin-bottom: 12px;
							transition: $trans_duration;
							cursor: pointer;
							background-color: rgba(0, 0, 0, 0.05);
						color: rgba(0,0,0,0.85);
							border: transparent 1px solid;

							&.is-selected {
								border-color: rgba(black,0.25);
								background-color: white;
							}
							&.is-correct {
								// border-color: rgba(black,0.25);
								background-color: rgba(green, .25);
							}
							&.is-incorrect {
								// border-color: rgba(black,0.25);
								background-color: rgba(red, .25);
							}
							&:hover {
								background-color: rgba(0, 0, 0, 0.1);
							}
							&:active {
								transform: scaleX(0.9);
							}
					}
				}

				.questionFooter {
					background:rgba(0,0,0,0.025);
					border-top: 1px solid rgba(0,0,0,0.1);
					width: 100%;
					align-self: flex-end;

					.pagination {
						//padding: 10px 15px;
							margin: 15px 25px;
					}
				}
		}
	}
	.pagination {
		display: flex;
		justify-content: space-between;
	}
	.button {
		padding: 0.5rem 1rem;
		border: 1px solid rgba(0,0,0,0.25);
		border-radius: 5rem;
		margin: 0 0.25rem;
		
		transition:0.3s;
		
		&:hover {
			cursor: pointer;
			background: #ECEFF1;
			border-color:rgba(0,0,0,0.25);
		}
		&.is-active {
			background: $primary_color;
			color: white;
			border-color: transparent;
			
			&:hover{
				background: darken($primary_color,10%);
				
			}
		}
	}

	@media screen and (min-width: 769px) {
		.questionBox {
			align-items: center;
				justify-content: center;

				.questionContainer {
					display: flex;
					flex-direction: column;
				}
		}
	}

	@media screen and (max-width: 768px) {
		.sidebar {
			height: auto !important;
				border-radius: 6px 6px 0px 0px;
		}
	}

</style>