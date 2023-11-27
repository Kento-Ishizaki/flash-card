import { useEffect, useState } from "react";

interface Word {
  english: string;
  japanese: string;
}

export function App() {
  const [words, setWords] = useState<Word[]>([]);

  const [currWordIndex, setCurrWordIndex] = useState(0);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    const res =
      process.env.NODE_ENV === "development"
        ? await fetch("http://localhost:8080/words")
        : await fetch("output.json");
    const data = await res.json();
    console.log(data);
    setWords(data);
  };

  const handleCardClick = () => {
    setCurrWordIndex(currWordIndex + 1);
  };

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
      {words.length > 0 && (
        <div
          className="h-36 w-full bg-gray-100 max-w-sm rounded-lg shadow-lg flex justify-center items-center cursor-pointer"
          onClick={handleCardClick}
        >
          <div className="">
            <p>英語: {words[currWordIndex].english}</p>
            <p>日本語: {words[currWordIndex].japanese}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
