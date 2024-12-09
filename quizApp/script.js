const quizData = [
	{
		question: "Q1: What is the full form of HTML?",
		a: "Hello To My Land",
		b: "Hey Text Markup Language",
		c: "Hyper Text Markup Language",
		d: "Hypertext Markup Language",
		correct:"d"
	},
	{
		question: "Q2: What is the full form of CSS?",
		a: "Cascading Style Sheet",
		b: "Cascading Style sheep",
		c: "Cascading super Sheet",
		d: "cartoon Style Sheet",
		correct:"a"
	},
	{
		question: "Q3: What is the full form of HTTP?",
		a: "Hypertext Transfer Protocol",
		b: "Hyper Text Transfer Protocol",
		c: "Hypertext Transfer Play",
		d: "Hypertext Tree Protocol",
		correct:"a"
	},
	{
		question: "Q4: What is the full form of HTML?",
		a: "Hello To My Land",
		b: "Hey Text Markup Language",
		c: "Hyper Text Markup Language",
		d: "Hypertext Markup Language",
		correct:"d"
	},
	{
		question: "Q5: Who is the Prime minister of Bangladesh",
		a: "Sheik Mujibur Rahman",
		b: "Sheik Hasina",
		c: "Zia Rahman",
		d: "Khaleda Zia",
		correct:"b"
	},
	{
		question: "Q6: Which year Javascript launched",
		a: "2010",
		b: "2008",
		c: "2015",
		d: "none of above",
		correct:"d"
	}
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submission = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
	const currenQuizData = quizData[currentQuiz];
	questionEl.innerHTML = currenQuizData.question;
	a_text.innerText = currenQuizData.a;
	b_text.innerText = currenQuizData.b;
	c_text.innerText = currenQuizData.c;
	d_text.innerText = currenQuizData.d;

}
function getSelected() {
	const answersEls = document.querySelectorAll('.answer');
	answersEls.forEach((answerEl) => {
		if(answerEl.checked){
			return answer = answerEl.id;
		}
	});
	return undefined;
}

submission.addEventListener('click', ()=> {
	//check to see answer
	const answer = getSelected();

	if (answer){
		currentQuiz++;
		if (currentQuiz < quizData.length) {
		    loadQuiz();
		} else {
			//TODO show results
			alert("You finished YoYo POPS!!");
		}
	}
	
});



