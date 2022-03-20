import { useState } from "react";
import "./App.scss";
import AudioButton from "./AudioButton";
import useAudioPlay from "./hooks/useAudioPlay";

type AudioList = [string, string][][];

function App() {
  const { handlers, play } = useAudioPlay({
    defaultAudioPath: "silent.wav",
    onPlayEnd: () => shiftQueue(),
  });
  const [playingIndex, setPlayingIndex] = useState(0);
  const [queue, setQueue] = useState<[string, string][]>([]);
  const shiftQueue = async () => {
    console.log(playingIndex);
    const head = queue[playingIndex];
    if (head == null) {
      setPlayingIndex(0);
      setQueue([]);
      return;
    }
    setPlayingIndex((index) => index + 1);
    const [_, path] = head;
    await play(path);
  };

  return (
    <div className="App" {...handlers}>
      <div>aaa</div>
      <div className="audio-lists">
        {audios.map((groups, index) => (
          <div className="audio-list-wrap" key={`gr-${index}`}>
            <div className="label-title">{groups[0][0]}</div>
            <ul className="audio-list">
              {groups.map(([label, path]) => (
                <li key={`${label}`}>
                  <AudioButton
                    label={label}
                    path={path}
                    onClick={() =>
                      setQueue((state) => [...state, [label, path]])
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>bbbb</div>
      <div className="queue">
        {queue.map(([label], index) => (
          <span className="label" key={`${label}${index}`}>
            {label}
          </span>
        ))}
      </div>
      <div>ccc</div>
      <div className="controller">
        <button onClick={shiftQueue}>play</button>
      </div>
    </div>
  );
}

export default App;

const audios: AudioList = [
  [
    ["作戦中1", "full_01.wav"],
    ["表面筋", "01_hyoumenkin.wav"],
    ["電位追跡", "01_deni_tsuiseki.wav"],
    ["オートフィリング", "01_autofilling.wav"],
    ["コンシーラー", "01_concealer.wav"],
  ],
  [
    ["作戦中2", "full_02.wav"],
    ["バクダンムシ", "02_bakudanmushi.wav"],
    ["抽出液", "02_chushutsueki.wav"],
    ["スタイリング", "02_styling.wav"],
    ["スプレー", "02_spray.wav"],
  ],
  [
    ["作戦中3", "full_03.wav"],
    ["フェイシャルボーン", "03_feisharuborne.wav"],
    ["フルフルストラクチャード", "03_fullstructured.wav"],
    ["セルフイメージ", "03_self_image.wav"],
    ["シェーディング", "03_shading.wav"],
    ["ハイライター", "03_highlighter.wav"],
  ],
  [
    ["作戦中4", "full_04.wav"],
    ["ウェット", "04_wet.wav"],
    ["ドライ", "04_dry.wav"],
    ["両用", "04_ryouyou.wav"],
    ["アンビエントカラー", "04_ambient_color.wav"],
    ["アダプト", "04_adapt.wav"],
    ["グロスチーク", "04_grosscheak.wav"],
  ],
];
