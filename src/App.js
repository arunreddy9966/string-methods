import logo from './logo.svg';
import './App.css';

function App() {

  let motivationQuotes="if you born poor it's not your mistake but, if you die poor it's your mistake.";
  return (
    <div className="App">

      <h2>Learning String Methods</h2>

      <button onClick={()=>{
        console.log(motivationQuotes.toUpperCase());
         console.log(motivationQuotes.toLowerCase());
      }}>toUpperCase/toLowerCase</button>


      <button onClick={()=>{
        let firstName="ArunKumar";
        let lastName="Reddy";
        let fullName=firstName.concat(lastName);
        console.log(fullName);

        let fullName2=`${firstName} ${lastName}`
        console.log(fullName2);
      }}>concat</button>


      <button onClick={()=>{
        let mahadev="          OM Namah Shivaya          ";
        console.log(`----->${mahadev})<-----`);
        console.log(`----->${mahadev.trimStart()})<-----`);
        console.log(`----->${mahadev.trimEnd()})<-----`);
        console.log(`----->${mahadev.trim()})<-----`);
      }}>trim/trimStart/trimEnd</button>



      <button onClick={()=>{
        let msg = "#oh my friend@";
        console.log(msg);
        console.log(msg.padStart(200,"#"));
        console.log(msg.padEnd(200,"@"));
      }}>padStart/padEnd</button>


      <button onClick={()=>{
      let shivaMantra="🙏Om Namah Shivaya🙏";
      console.log(shivaMantra.repeat(1000));
      }}>repeat</button>


      <button onClick={()=>{
        let msg="success is not a destination it's a journey. success takes time so stay focused and be patient.";
        console.log(msg.replace("success","victory"));
        console.log(msg.replaceAll("success","victory"));
      }}>replace/replaceAll</button>


      <button onClick={()=>{
      let msg="success is not a destination it's a journey. success takes time so stay focused and be patient.";
      console.log(msg.split(" "));
      }}>split</button>


      <button onClick={()=>{
     let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(alphabets.slice(10,20));
          console.log(alphabets.substring(10,20));
          console.log(alphabets.substr(10,10));
      }}>slice/subString/subStr</button>

      <br></br>

      <button onClick={()=>{
        console.log(motivationQuotes.length);

        console.log(motivationQuotes.at(10))
        console.log(motivationQuotes[10]);

        console.log(motivationQuotes.charAt(10));
      }}>Length/at/chatAt</button>



      <button onClick={()=>{
        let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZఅఆఇఈఉఊఋౠఎఏఐఒఓఔఅంఅః";

        for(let i=0;i<alphabets.length;i++){
          console.log(`${alphabets.charAt(i)}---${alphabets.charCodeAt(i)}`);
        }
      }}>charCodeAt</button>


      <button onClick={()=>{

        for(let i=3077;i<=4000;i++){
          console.log(`${i}---${String.fromCharCode(i)}`);
        }
      }}>fromCharCode</button>


      
      <button onClick={()=>{
       let indiaPresident="shri.Droupadi Murmu ji";

       console.log(indiaPresident.startsWith("shri."));
       console.log(indiaPresident.endsWith("ji"));

       console.log(indiaPresident.includes("Murmu"));
      }}>startsWith/endsWith/includes</button>


      <button onClick={()=>{
      let msg="success is not a destination it's a journey. victory takes time so stay focused and be patient."

       console.log(msg.indexOf("victory"));
       console.log(msg.search("/Victory/i"));
      }}>indexOf/lastIndexOf</button>


      {/* <button onClick={()=>{}}></button>
      <button onClick={()=>{}}></button>
      <button onClick={()=>{}}></button>
      <button onClick={()=>{}}></button> */}
    </div>
  );
}

export default App;
