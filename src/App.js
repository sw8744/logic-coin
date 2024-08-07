import './App.css';
import logic from './logic.jpeg';
import { useEffect, useState } from 'react';

function App() {
  const [answer, setAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState(100);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  const getAnswer = () => {
    const answerList = document.getElementsByClassName('questionAnswer');
    const answerArray = Array.from(answerList).map(answer => answer.value);
    setAnswer(answerArray);
  };

  const getCorrectAnswer = async () => {
      for (let i = 1; i <= 100; i++) {
        const key = `REACT_APP_${i}`;
        const value = process.env[key];
        if (value !== undefined) {
          correctAnswer.push(value);
        }
    };
  };

  const checkAnswer = () => {
    let wrong = 100;
    for (let i = 0; i < 100; i++) {
      if (answer[i] === correctAnswer[i]) {
        wrong--;
      }
    };
    setWrongAnswer(wrong);
  };


  setInterval(() => {
    getAnswer();
  }, 100);

  useEffect(() => {
    getCorrectAnswer();
  }, []);

  return (
    <>
      <div className='questionContainer'>
        <div className='questionDiv' id='questionDiv1'>
          <div className='question'>
            <div className='questionNumber'>001</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>002</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>003</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>004</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>005</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>006</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>007</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>008</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>009</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>010</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>011</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>012</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>013</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>014</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>015</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>016</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>017</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>018</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>019</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>020</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>021</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>022</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>023</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>024</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>025</div>
            <input type='text' className='questionAnswer' />
          </div>
        </div>

        <div className='questionDiv' id='questionDiv2'>
          <div className='question'>
            <div className='questionNumber'>026</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>027</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>028</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>029</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>030</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>031</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>032</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>033</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>034</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>035</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>036</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>037</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>038</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>039</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>040</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>041</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>042</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>043</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>044</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>045</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>046</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>047</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>048</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>049</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>050</div>
            <input type='text' className='questionAnswer' />
          </div>
        </div>

        <div className='questionDiv' id='questionDiv1'>
          <div className='question'>
            <div className='questionNumber'>051</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>052</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>053</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>054</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>055</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>056</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>057</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>058</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>059</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>060</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>061</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>062</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>063</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>064</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>065</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>066</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>067</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>068</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>069</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>070</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>071</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>072</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>073</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>074</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>075</div>
            <input type='text' className='questionAnswer' />
          </div>
        </div>

        <div className='questionDiv' id='questionDiv2'>
          <div className='question'>
            <div className='questionNumber'>076</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>077</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>078</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>079</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>080</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>081</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>082</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>083</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>084</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>085</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>086</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>087</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>088</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>089</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>090</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>091</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>092</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>093</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>094</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>095</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>096</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>097</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>098</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>099</div>
            <input type='text' className='questionAnswer' />
          </div>
          <div className='question'>
            <div className='questionNumber'>100</div>
            <input type='text' className='questionAnswer' />
          </div>
        </div>
      </div>
      <div className='buttonContainer'>
        <button className='answerButton' onClick={() => {checkAnswer()}}>정답 확인</button>
        
      </div>
      <div className='infoContainer'>
        <div className='info'>오답 개수 : {wrongAnswer}개</div>
      </div>
      <img src={logic} alt='logic' className='logic' />
    </>
  );
}

export default App;
