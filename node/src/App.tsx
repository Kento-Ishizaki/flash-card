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

  const handleReset = () => {
    setCurrWordIndex(0);
  };

  return (
    <div className="h-screen w-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center h-screen">
        {words.length > 0 && currWordIndex < words.length && (
          <div>
            <div
              className="flex flex-col justify-center items-center py-10 px-20 bg-gray-100 max-w-sm rounded-lg shadow-lg cursor-pointer text-xl"
              onClick={handleCardClick}
            >
              <p>英語: {words[currWordIndex].english}</p>
              <p>日本語: {words[currWordIndex].japanese}</p>
            </div>
          </div>
        )}
        <div className="block justify-center items-center">
          <div
            className="flex items-center justify-center bg-gray-100 rounded-lg shadow-lg cursor-pointer mt-10 px-10 py-5"
            onClick={handleReset}
          >
            <p>リセット</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
